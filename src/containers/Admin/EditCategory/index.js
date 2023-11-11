import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErroMessage } from '../../../components'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Container, Label, Input, LabelUoload, ButtonAdcionar } from './styles'

function EditCategory() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const {
    state: { product }
  } = location

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const productDataFormDat = new FormData()
    productDataFormDat.append('name', data.name)
    productDataFormDat.append('file', data.file[0])

    await toast.promise(
      api.put(`categories/${categories.id}`, productDataFormDat),
      {
        pending: 'Editando novo produto...',
        error: 'Falha ao editar o produto',
        success: 'Produto editado com sucesso'
      }
    )

    setTimeout(() => {
      navigate(paths.Products)
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErroMessage>{errors.name?.message}</ErroMessage>
        </div>

        <div>
          <LabelUoload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUoload>
          <ErroMessage>{errors.file?.message}</ErroMessage>
        </div>

        <ButtonAdcionar>Editar categoria</ButtonAdcionar>
      </form>
    </Container>
  )
}
export default EditCategory

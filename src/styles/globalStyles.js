import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
        *{
            margin: 0;
            padding:0;
            box-sizing:border-box;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            outline: none;
        }

        :root {
        --color-bg: #1f1f38;
        --color-bg-variant:#2c2c6c;
        --color-primary: #4db5ff;
        --color-primary-variant: rgba(77, 181, 255, 0.4);
        --color-white: #fff;
        --color-ligth: rgb(255, 255, 255, 0.6);
        --transition: all 400ms ease;
        }



`

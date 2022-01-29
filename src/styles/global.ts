import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5;
        --shape: #ffffff;

        --green: #33CC95;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, select, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        position: relative;
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        border-radius: 0.25rem;
        max-height: 600px;
        overflow-y: scroll;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background-color: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

`
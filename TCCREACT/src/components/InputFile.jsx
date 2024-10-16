import React from 'react'
import '../assets/javascript/input.js'
import '../assets/style/home.css';

const InputFile = () => {
  return (
    <>
    <div class="custom-file-upload">
    <button id="uploadButton">Selecionar Arquivo</button>
    <span id="fileName">Nenhum arquivo selecionado</span>
    <input type="file" id="fileInput" style="display: none;"/>
    </div>
    </>
  )
}

export default InputFile

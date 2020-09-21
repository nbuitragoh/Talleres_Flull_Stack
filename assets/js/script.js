const formulario = document.getElementById('formulario')

let listaArtistas = [];


formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputnombre = document.getElementById('nombre').value
    const inputedad = document.getElementById('edad').value
    const inputcuidad = document.getElementById('ciudad').value
    const inputgenero = document.getElementById('genero').value

    const usuario = {
        nombre: inputnombre,
        edad: inputedad,
        ciudad: inputcuidad,
        genero: inputgenero
    }
    guardarEnStorage(usuario)
})

const guardarEnStorage =  (usuario)=>{
    if(localStorage.getItem('usuarios') == null){
            listaArtistas.push(usuario)
            const usuariosString = JSON.stringify(listaArtistas)
            localStorage.setItem('usuarios', usuariosString)
    }else{
        listaEnStorage = JSON.parse(localStorage.getItem("usuarios"))
        listaEnStorage.push(usuario)
        const usuariosString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuariosString)
    }
}
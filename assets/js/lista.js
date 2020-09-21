const tabla = document.getElementById('listasart')


const usuariosGuardadosEnStorage = ()=>{
    const usuarioEnStorage = JSON.parse(localStorage.getItem('usuarios'))
    console.log(usuarioEnStorage)
    for(let i = 0; i<usuarioEnStorage.length; i += 1 ){
        tabla.innerHTML += `
            <tr>
                <th>${i+1}</th>
                <td>${usuarioEnStorage[i].nombre}</td>
                <td>${usuarioEnStorage[i].edad}</td>
                <td>${usuarioEnStorage[i].ciudad}</td>
                <td>${usuarioEnStorage[i].genero}</td>
            <tr>
        `
        // ""
        //  ''
        // ``
        console.log(usuarioEnStorage[i])
    }

}
usuariosGuardadosEnStorage()

document.getElementById('limpiar').addEventListener('click', ()=>{
    localStorage.clear()
    tabla.innerHTML=''
})
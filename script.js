async function buscarProducto(){

const especie = document.getElementById("species").value.toLowerCase()
const entorno = document.getElementById("environment").value.toLowerCase()
const area = parseFloat(document.getElementById("area").value)

const response = await fetch("productos.json")
const productos = await response.json()

const producto = productos.find(p =>

p.organismo_diana.toLowerCase().includes(especie)

)

if(!producto){

document.getElementById("resultado").innerHTML =
"<p>No se encontró producto para esa especie.</p>"

return

}

let resultadoHTML = `
<h2>Resultado</h2>

Producto recomendado: ${producto.producto}<br>
Registro sanitario: ${producto.registro}<br>
Forma de uso: ${producto.forma_uso}<br>
Precio: ${producto.precio}<br>
Dosis: ${producto.dosis}
`

document.getElementById("resultado").innerHTML = resultadoHTML

}
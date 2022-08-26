const nombre = "Federico"
const apellido = "Saboredo"

const obj = {
  nombre,
  apellido
}

sessionStorage.setItem("objeto", JSON.stringify(obj))
localStorage.setItem("objeto", JSON.stringify(obj))


const tiempo = new Date()

document.cookie = `objeto=${JSON.stringify(obj)};expires=${new Date(now.getTime() + 2 * 60000)}`

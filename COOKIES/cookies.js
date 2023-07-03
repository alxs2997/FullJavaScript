document.getElementById("verTodas").addEventListener("click", verTodas);
document.getElementById("crearCookie1").addEventListener("click", crearCookie);
document.getElementById("crearCookie2").addEventListener("click", crearCookie);
document.getElementById("borrarCookie1").addEventListener("click", borrarCookie);
document.getElementById("borrarCookie2").addEventListener("click", borrarCookie);

function verTodas() {
    alert(document.cookie);
}
function crearCookie(e){
    if (e.target.id == "crearCookie1") {
        document.cookie = "nombre=Juan";
    }
    else if (e.target.id == "crearCookie2") {
        document.cookie = "apellido=Perez";
    }

}
function borrarCookie(e){
    if (e.target.id == "borrarCookie1") {
        document.cookie = "nombre=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    else if (e.target.id == "borrarCookie2") {
        document.cookie = "apellido=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
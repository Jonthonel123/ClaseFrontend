// collbacks

const buscar_por_dni = (dni, callback) => {
    // return "Jonthonel Requena Morales";
    let nombre_encontrado = "------"
    setTimeout(function() {
        console.log("Buscando en la BD");
        nombre_encontrado = "jonthonel Requena Morales";
        callback(nombre_encontrado)
    }, 2000);

};
buscar_por_dni("70745911", (nombre) => { console.log(nombre); });

const Login = (email, password) => {

    setTimeout(function() {
        console.log("buscando en la BD");
        password_login = "Jonthonel"
        correo_login = "jcmrm01@hotmail.com"
        email(correo_login)
        password(password_login)

    }, 2000)
};
Login((correo) => {
    console.log(`El correo es ${correo}`);

}, (contraseña) => { console.log(`La contraseña es: ${contraseña}`); })
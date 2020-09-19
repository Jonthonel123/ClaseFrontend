import { URL_BACKEND2 } from "../enviroment/enviroment";

export const posRegister = async (objUsuario) => {
    const response=fetch(`${URL_BACKEND2}/registro`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(objUsuario),
    })
    const json= await response.json()
    return json
};

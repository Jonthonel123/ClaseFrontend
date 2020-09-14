import React from 'react'
import {PulseLoader} from 'react-spinners'

const Cargando = () => {
   
    return (
        <div >
            {/* bootstrap <h4 className="alert-heading">Cargando</h4>
            <p><i className="fas fa-spinner fa-2x fa-spin"></i></p>
            <p>{texto}</p> */}
            {/* react-spinners
            <BounceLoader size={24} color='red' loading/>
            <BarLoader size={48} color='orange' loading/> */}

            <PulseLoader size={24} color='#F5AC32' margin={2} loading/>
        </div>
    )
}

export default Cargando

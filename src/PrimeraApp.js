// import React from 'react'
// import { Fragment } from "react";
import PropTypes from 'prop-types';

//FC (Functional Components)
const PrimeraApp = ({saludo, subtitulo}) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}
PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired // Es requerido/necesario
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo' // Valor por defecto
} 

export default PrimeraApp;

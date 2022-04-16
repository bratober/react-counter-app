import React from 'react'
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";



describe('Puebas en <PrimeraApp/>', () => {

    test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
        const saludo = "Hola, soy Goku";
        const { getByText } = render(<PrimeraApp saludo={saludo}/>)
        expect( getByText(saludo)).toBeInTheDocument();
     })

 })

import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../Helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;


const Resumen = ({datos}) => {
    const {marca,year,plan} = datos;

    if(marca ===''|| year ==='' || plan ==='') return null;

    return (
        <ContenedorResumen>
            <h1>Resumen de cotizacion</h1>  
        <ul>
            <li>Marco: {primerMayuscula(marca)}</li>
            <li>Plan: {primerMayuscula(plan)}</li>
            <li>Año del Auto: {year} </li>
        </ul>
        </ContenedorResumen>
        
      
   
  
       
     

             );
}
 
export default Resumen;
import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const Mensaje =styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const TextoCotizador = styled.p`
    color: #0083BF;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;

`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    background-color: rgb(127,224,237);
    position: relative;

`;

const Resultado = ({cotizacion}) => {

    


    return (  

        (cotizacion ===0) ? <Mensaje>Elige Marca año y tipo de seguro</Mensaje> :
       (
           <ResultadoCotizacion>
             <TransitionGroup
                component="spam"
                className="resultado"
             >
                 <CSSTransition
                        classNames= "resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit:500}}
                        >
                 <TextoCotizador>El total es: $ <spam>{cotizacion} </spam>  </TextoCotizador> 
                 </CSSTransition>
             </TransitionGroup>

           </ResultadoCotizacion>
       )
       
    );
}
 
export default Resultado;
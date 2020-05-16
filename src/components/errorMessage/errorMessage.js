import React from 'react';
import img from './error.jpg';
import styled from 'styled-components';

const MessageError = styled.span`
    display: block;
    color: white;
    font-size: 18px;
    font-weight: bold;
`

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img> */}
            <MessageError>Something goes wrong</MessageError>
        </>
    )
}

export default ErrorMessage;
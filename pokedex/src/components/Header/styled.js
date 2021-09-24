import styled from "styled-components";


export const GeneralContainer = styled.div`
    display: flex;
    background-color: red;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 11px 4px 0px #000000;
`

export const Button = styled.button`
background-color: #FFCC00;
border-radius: 15px;
border: 4px solid white;
width: 150px;
min-height: 42px;
font-weight: bold;
color: black;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    :hover {
        opacity: 0.8;
        transition: 0.5s;
        cursor: pointer;
        cursor: pointer;
    }
`

export const Title = styled.h2` 
    color: white;
    justify-content: center;
    align-items: center;
    margin: 10px 0px 0px 0px;
        img {
            width: 250px;
            filter: drop-shadow(2px 2px 5px #161616); 

        }
`
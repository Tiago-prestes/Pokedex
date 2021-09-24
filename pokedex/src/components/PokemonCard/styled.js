import styled from "styled-components"

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 300px;
border: 6px solid black;
align-items: center;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
border-radius: 55px;
background-color: red;
margin: 50px 10px 10px 30px;

    p {
        color: white;
        font-weight: bold;
        ::first-letter{
            text-transform: capitalize;
        }
    }
`

const Image = styled.img`
margin-top: 8px;
background-color: white;
width: 125px;
height: 125px;
border-radius: 100px;
border: 6px solid black;
box-shadow: 2px 2px 5px #161616; 
`

const ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
height: 100%;
`

const Buttons = styled.button`
background-color: #FFCC00;
border-radius: 55px;
border: none;
text-align: center;
margin: 0px 0px 16px 0px;
box-sizing: border-box;
min-width: 100px;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);

    :hover {
        opacity: 0.8;
        transition: 0.6s;
        cursor: pointer;
    }
    p {
        color: black;
        font-weight: bold;
    }
`
export {
    ButtonsContainer,
    MainContainer,
    Buttons,
    Image
}
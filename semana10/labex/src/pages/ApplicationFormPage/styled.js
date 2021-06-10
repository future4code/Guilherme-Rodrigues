import styled from "styled-components";


export const InputApply = styled.input`
margin-top: 20px;
font-family: Ubuntu;
outline: none;
font-size: 18px;
text-align: center;
color: white;
width: 100%;
height: 65px;
background: rgba(33, 33, 33, 0.8);
border: 1px solid rgba(221, 221, 221, 0.8);
box-sizing: border-box;
border-radius: 30px;
::-webkit-inner-spin-button{ 
    appearance: none;
    margin: 0; 
}
`

export const ApplicationHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

export const ApplicationContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;

`
export const ButtonsDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
`
export const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;

`

export const InputApplyAge = styled.input`
margin-top: 20px;
margin-left: 10px;
font-family: Ubuntu;
outline: none;
font-size: 18px;
text-align: center;
color: white;
width: 30%;
height: 65px;
background: rgba(33, 33, 33, 0.8);
border: 1px solid rgba(221, 221, 221, 0.8);
box-sizing: border-box;
border-radius: 30px;
::-webkit-inner-spin-button{ 
    appearance: none;
    margin: 0; 
}
`
export const InputApplyText = styled.input`
margin-top: 20px;
font-family: Ubuntu;
outline: none;
font-size: 18px;
text-align: center;
color: white;
width: 100%;
height: 160px;
background: rgba(33, 33, 33, 0.8);
border: 1px solid rgba(221, 221, 221, 0.8);
box-sizing: border-box;
border-radius: 30px;
::-webkit-inner-spin-button{ 
    appearance: none;
    margin: 0; 
}
`
export const SelectDisplayApply = styled.select`
    margin-top: 20px;
    font-family: Ubuntu;
    outline: none;
    font-size: 18px;
    color: white;
    width: 45%;
    height: 65px;
    background: rgba(33, 33, 33, 0.8);
    border: 1px solid rgba(221, 221, 221, 0.8);
    border-radius: 10px;
    text-align-last:center;

`

export const OptionDisplayApply = styled.option`
    background-color: rgba(33, 33, 33, 0.8);
    text-align: center;
    :active, :hover{
        background-color: #b08a4b;
    }
`
export const ButtoApply = styled.div`
    margin-top:20px;
    display: flex;
    justify-content: center;

`
export const FormContainer = styled.form`
    width: 100%;
`
import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import { goToUserPage, goToLoginPage } from '../../routes/coordinator';
import { ButtonPageBlack, HomeBack, HomeMain, LogoDiv, LogoImg, LogoName, LogoText, MessageBlock, SelectPage, WelcomeText } from './../../components/Main/styled';
import logo1 from './../../img/Capturar_select-area_20210608091410-removebg-preview.png'

const Home = () => {
    const history = useHistory()
    return (
        <HomeBack>
            <HomeMain>
                <LogoDiv>
                    <LogoImg src={logo1}/>
                    <LogoName>LabeX</LogoName>
                    <LogoText>As melhores viagens espaciais</LogoText>
                </LogoDiv>
                <MessageBlock>
                    <WelcomeText>Bem-vindo</WelcomeText>
                    <SelectPage>
                        <ButtonPageBlack onClick={()=> goToLoginPage(history)}>Administrador</ButtonPageBlack>
                        <ButtonPageBlack onClick={()=> goToUserPage(history)}>Ver viagens</ButtonPageBlack>
                    </SelectPage>
                </MessageBlock>
            </HomeMain>
        </HomeBack>
    );
  };
  
  export default Home

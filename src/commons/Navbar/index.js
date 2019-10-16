import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHistory, faPhoneSquareAlt, faHeart, faUser} from '@fortawesome/free-solid-svg-icons'

import Container from "../Style/Container";
import theme from '../../constants/theme'
import Button from '../Buttons'
import Logo from '../../assets/images/logo.png'
import Menu from './Menu'

const NavigationBar = ({ history }) => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <UL>
              <Brand to="/" brand>
                <Img src={Logo} alt="logo" />
              </Brand>
              <NavLink to="/guide/add">
                <Button>
                  <IconButton>
                    <FontAwesomeIcon icon={faUser} />
                    Become a guide
                  </IconButton>
                </Button>
              </NavLink>
              <Text><FontAwesomeIcon icon={faPhoneSquareAlt} /> <Span>+813 4540 5834</Span></Text>
              <NavLink to="/history"><FontAwesomeIcon icon={faHistory} /></NavLink>
              <NavLink to="/whishlist"><FontAwesomeIcon icon={faHeart} /></NavLink>
              <Menu history={history} />
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </UL>
          </nav>
        </Container>
      </Header>
    </>
  );
};

export default withRouter(NavigationBar);

const Header = styled.header`
    width: 100%;
    min-height: 60px;
    box-shadow:0 0 3px rgba(0,0,0,.2);
    padding: .5rem 1rem 0;
  `,
  UL = styled.ul`
    display: flex;
    list-style-type: none;
    font-size: 20px;
    justify-content: flex-end;
    margin: 0px;
    @media(min-width: 450px) {
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
    }
  `,
  Brand = styled(Link)`
    margin-right: auto;
    color: ${theme.color.primary};
  `,
  Img = styled.img`
    max-width: 100%;
    width: 140px;
  `,
  Text = styled.span`
    padding: 0 10px;
    color: ${theme.color.text.primary};
    font-size: 16px;
    align-self: center;
  `,
  Span = styled.span``,
  IconButton = styled(Button.Content)`
    background: transparent;
    color: ${theme.color.primary};
    border: solid 1px ${theme.color.primary};
    > svg {
      margin-right: 5px;
    }
  `,
  NavLink = styled(Link)`
    padding: 0 10px;
    color: ${theme.color.text.primary};
    font-size: 16px;
    align-self: center;
  `;

import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

import Container from '../../../commons/Style/Container'
import theme from '../../../constants/theme'

const Footer = styled.footer`
    padding: 14px 0;
    font-size: 13px;
    line-height: 17px;
    color: #000;
    overflow: hidden;
    background: #f2f2f2;
  `,
  FooterPhone = styled.div`
    float: right;
  `,
  PhoneTitle = styled.span`
    float: left;
    margin: -1px -3px -2px 0;
    color: #3eb368;
    font-size: 18px;
    line-height: 1;
  `,
  PhoneList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0;
    letter-spacing: -4px;
    font-weight: 500;
    float: left;
    color: #000;
  `,
  PhoneListLI = styled.li`
    display: inline-block;
    vertical-align: top;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0;
    margin: 0 0 0 25px;
  `,
  Copyright = styled.div`
    float: left;
  `,
  CopyrightAnchor = styled.a`
    color: #000;
    font-style: normal;
    text-decoration: none;
  `,
  Address = styled.address`
    font-style: normal;
    display: inline;
  `

const FootNote = () => {
  return (
    <>
      <Footer>
        <Container>
          <FooterPhone>
            <PhoneTitle>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </PhoneTitle>
            <PhoneList>
              <PhoneListLI title="Denmark">
                <a href="tel:+4589871798" className="tel-link">
                  +45-8982-604545
                </a>
              </PhoneListLI>
              <PhoneListLI title="USA">
                <a href="tel:+13473184887" className="tel-link">
                  +1347-318-4887
                </a>
              </PhoneListLI>
              <PhoneListLI title="Japan">
                <a href="tel:+81345405834" className="tel-link">
                  +903-4825-58346789
                </a>
              </PhoneListLI>
            </PhoneList>
          </FooterPhone>
          <Copyright>
            ©
            <CopyrightAnchor href="https://www.bookmundi.com">
              Guidebook.com
            </CopyrightAnchor>
            {/* 2019 -<Address>Elmegade 22 Thisted, 7700 Denmark.</Address> */}
            <span> All Rights Reserved.</span>
          </Copyright>
        </Container>
      </Footer>
    </>
  )
}

export default FootNote

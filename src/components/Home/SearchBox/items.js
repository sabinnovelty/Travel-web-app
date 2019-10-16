import React from 'react'
import styled from 'styled-components'
import {Nav} from 'react-bootstrap'

const Items = () => {
  return (
    <>
      <Nav>
        <NavItem>Certified Independent Guides.</NavItem>
        <NavItem>Direct Guide Communication.</NavItem>
        <NavItem>
          Flexible and Secure Booking with 7 Days Free Cancellation.
        </NavItem>
      </Nav>
    </>
  )
}

export default Items

const NavItem = styled(Nav.Item)`
  font-size: 14px;
  padding-right: 10px;
`

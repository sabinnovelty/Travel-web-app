import React from 'react'
import styled from 'styled-components'

const Navigations = () => {
  return (
    <>
      <UL>
        <Li>
          <Anchor href="/guides/list?baseCity=lukla">
            <Text>Guides For Everest Region.</Text>
          </Anchor>
        </Li>
        <Li>
          <Anchor href="/guides/list?baseCity=pokhara">
            <Text>Guides For Annapurna Region.</Text>
          </Anchor>
        </Li>
        <Li>
          <Anchor href="#no-specific-dates">
            <Text>I don’t know the Specific date and Region.</Text>
          </Anchor>
        </Li>
        <Li>
          <Anchor href="#talk-to-a-guide">
            <Text>I want to talk to a specific guide first.</Text>
          </Anchor>
        </Li>
        <Footer>
          If you have any query, Contact HoneyGuide on &nbsp;
          <Anchor target="_blank" href="https://wa.me/9779843376717">
            {' '}
            Whatsapp
          </Anchor>{' '}
          &nbsp; or &nbsp;
          <Anchor target="_blank" href="mailto:honeybird@honeyguideapps.com">
            Email
          </Anchor>
        </Footer>
      </UL>
    </>
  )
}

export default Navigations

const UL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 -5px;
  `,
  Li = styled.li`
    padding: 5px;
  `,
  Anchor = styled.a`
    color: #000;
    text-decoration: underline;
  `,
  Text = styled.div`
    padding: 4px 18px;
    border: 1px solid #afafaf;
    border-radius: 9px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  `,
  Footer = styled.li`
    flex: 0 0 100%;
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
  `

import React from 'react'
import styled from 'styled-components'

import Container from '../../../../commons/Style/Container'
import FilterForm from './FilterForm'
import List from './List'
import items from './items'

const AllGuides = () => {
  return (
    <>
      <Container style={{marginTop: 10}}>
        <Row>
          <Column3>
            <FilterForm />
          </Column3>
          <Column9>
            <List items={items} />
          </Column9>
        </Row>
      </Container>
    </>
  )
}

export default AllGuides

const Wrapper = styled.div`
    display: flex;
  `,
  Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
  `,
  Column3 = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    @media (min-width: 992px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
  `,
  Column9 = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    @media (min-width: 992px) {
      flex: 0 0 75%;
      max-width: 100%;
    }
  `

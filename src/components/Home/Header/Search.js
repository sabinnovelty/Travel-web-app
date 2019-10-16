import React from 'react'
import styled from 'styled-components'
import {reduxForm, Field} from 'redux-form'

import Row from '../../../commons/Forms/Row'
import Button from '../../../commons/Buttons'
import {TextField, DateField, QuantityField} from '../../../commons/Forms/InputField'

const Search = () => {
  return (
    <>
      <Wrapper>
        <Row>
          <Field
            name="place"
            label="Where do you want to go?"
            component={TextField}
          />
        </Row>
        <Row>
          <Field
            name="number_of_trekker"
            label="trekker"
            input={{value: '1 trekker'}}
            component={QuantityField}
          />
        </Row>
        <Row>
          <Field name="date" label="Checkin date" component={DateField} />
        </Row>
        <Row>
          <Field name="date" label="Checkout date" component={DateField} />
        </Row>

        <Row>
          <Button css="width: 100%;">
            <Button.Content css="width: 100%;">Search</Button.Content>
          </Button>
        </Row>
      </Wrapper>
    </>
  )
}

export default reduxForm({
  form: 'search',
})(Search)

const Wrapper = styled.div`
  max-width: 100%;
  padding-top: 10px;
  padding-bottom: 4px;
`

{
  /* <Wrapper>
      <Row>
        <Field name="place" label="Where do you want to go?" component={TextField} />
        <Field name="date" label="Checkin - Checkout date" component={DateField} />
        <Field name="number_of_trekker" label="trekker" input={{ value: '1 trekker'}} component={QuantityField} />
      </Row>
    </Wrapper> */
}

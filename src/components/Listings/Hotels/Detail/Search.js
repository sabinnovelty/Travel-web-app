import React from 'react'
import {Field} from 'redux-form'
import Row from '../../../../commons/Forms/Row'
import {TextField, DateField, QuantityField} from '../../../../commons/Forms/InputField'
import Button from '../../../../commons/Buttons'

const Search = () => {
  return (
    <>
      <Row>
        <h4>Search</h4>
      </Row>
      <Row>
        <Field
          name="place"
          label="Where do you want to go?"
          component={TextField}
        />
      </Row>
      <Row>
        <Field
          name="date"
          label="Checkin - Checkout date"
          component={DateField}
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
        <Button>
          <Button.Content>Search</Button.Content>
        </Button>
      </Row>
      <Row />
    </>
  )
}

export default Search

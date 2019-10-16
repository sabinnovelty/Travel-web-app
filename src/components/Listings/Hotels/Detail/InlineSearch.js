import React from 'react'
import {Field} from 'redux-form'
import Row from '../../../../commons/Forms/Row'
import {DateField, QuantityField} from '../../../../commons/Forms/InputField'
import Button from '../../../../commons/Buttons'

const InlineSearch = () => {
  return (
    <>
      <Row>
        <Field
          name="date"
          label="Checkin - Checkout date"
          component={DateField}
        />
        <Field
          name="number_of_trekker"
          label="No. of people(PAX)"
          input={{value: '1 trekker'}}
          component={QuantityField}
        />
        <Button>
          <Button.Content style={{marginTop: '20px'}}>
            Check Availability
          </Button.Content>
        </Button>
      </Row>
    </>
  )
}

export default InlineSearch

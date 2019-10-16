import React from 'react'
import styled from 'styled-components'
import {Field, reduxForm} from 'redux-form'

import {TextField, DateField, QuantityField} from '../../../commons/Forms/InputField'
import Button from '../../../commons/Buttons'
import Row from '../../../commons/Forms/Row'
import Card from '../../../commons/Cards'

const Search = ({handleSubmit}) => {
  return (
    <>
      <Wrapper>
        <Card>
          <Card.Content>
            <form
              onSubmit={handleSubmit(values => console.log('values', values))}
            >
              <Row style={{margin: '8px 0 5px 0'}}>
                <Field
                  name="location"
                  placeholder="Location"
                  component={TextField}
                />
                <Field
                  name="date"
                  component={DateField}
                  placeholder="Start - End Dates"
                  monthsShown={2}
                />
                <Field
                  name="number_of_trekker"
                  placeholder="1 trekker"
                  input={{value: '1 trekker'}}
                  component={QuantityField}
                />
                <SearchButton>
                  <Button.Content>Search</Button.Content>
                </SearchButton>
              </Row>
            </form>
          </Card.Content>
        </Card>
      </Wrapper>
    </>
  )
}

export default reduxForm({
  form: 'search',
})(Search)

const Wrapper = styled.div`
    margin: 10px 0;
  `,
  SearchButton = styled(Button)``

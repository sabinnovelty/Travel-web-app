import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

import Switch from '../../../../../commons/Forms/Switch'
import Checkbox from '../../../../../commons/Forms/Checkbox'
import Radio from '../../../../../commons/Forms/Radio'
import Card from '../../../../../commons/Cards'

const FilterForm = () => {
  return (
    <>
      <Card>
        <Card.Content>
          <div>
            <FieldWrapper >
              <Field rightLabel="Female guide only" component={Switch} />
           </FieldWrapper>
            <div>
              <span>Based In:</span>
              <Field name="based_in" label="Lukla" value="lukla" type="radio" component={Radio} />
              <Field name="based_in" label="Pokhara" value="pokhara" type="radio" component={Radio} />
              <Field name="based_in" label="Kathmandu" value="kathmandu" type="radio" component={Radio} />
            </div>
            <div>
              <span>Languages:</span>
              <Field name="english" label="English" component={Checkbox} />
              <Field name="chinese" label="Chinese" component={Checkbox} />
              <Field name="german" label="German" component={Checkbox} />
              <Field name="german" label="Russian" component={Checkbox} />
              <Field name="hindi" label="Hindi" component={Checkbox} />
              <Field name="french" label="French" component={Checkbox} />
              <Field name="spanish" label="Spanish" component={Checkbox} />
            </div>
            <div>
              <span>Experience:</span>
              <Field name="experience" label="1+ year" value="1+" type="radio" component={Radio} />
              <Field name="experience" label="3+ year" value="3+" type="radio" component={Radio} />
              <Field name="experience" label="5+ year" value="5+" type="radio" component={Radio} />
              <Field name="experience" label="10+ year" value="10+" type="radio" component={Radio} />
            </div>
          </div>
        </Card.Content>
      </Card>
    </>
  )
}

export default reduxForm({
  form: 'filter',
})(FilterForm)

const FieldWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
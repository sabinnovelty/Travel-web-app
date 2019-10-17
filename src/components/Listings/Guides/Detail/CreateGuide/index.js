import React, { Component } from "react";
import "./create-guide-form.css";
import { reduxForm, Field } from "redux-form";
import {
  renderInput,
  renderTextArea,
  renderPreferredTrekkingRegion,
  renderSafteyTraining,
  renderLanguage,
  renderExpertiseRegion,
  renderSpecialization
} from "../../../../../commons/Input/FormComponent";

class CreateGuide extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, meta } = this.props;
    return (
      <div classNameName="create-guide">
        <form>
          <div classNameName="contact-info">
            <h3> Introduction</h3>
            <Field
              name="introduction"
              component={renderTextArea}
              label="Introduction"
              placeholder="Introduction"
            />
            <Field
              name="address"
              component={renderInput}
              label="Address"
              type="text"
              placeholder="Address"
            />
            <Field component={renderPreferredTrekkingRegion} />
          </div>

          <div classNameName="contact-info" style={{ marginTop: 20 }}>
            <h3>Contact Information</h3>
            <Field
              name="address"
              component={renderInput}
              label="Email Address"
              type="email"
              placeholder="Email Address"
            />
            <Field
              name="phone_number"
              component={renderInput}
              label="Contact Number"
              type="number"
              placeholder="Contact Number"
            />
            <div className="personal_information">
              <h3>Personal Information</h3>
              <Field
                name="wages"
                component={renderInput}
                label="Daily Wages(USD per day)"
                type="number"
                placeholder="Daily wages"
              />
              <Field
                name="experience"
                component={renderInput}
                label="Experience in year"
                type="number"
                placeholder="Experience in year"
              />
              <Field
                name="safteyTraining"
                component={renderSafteyTraining}
                label="Saftey Training"
                placeholder="Saftey Training"
              />
              <Field
                name="language"
                component={renderLanguage}
                label="Languages"
                type="number"
              />
              <Field
                name="preferred_trekking"
                component={renderPreferredTrekkingRegion}
                label=""
              />
              <Field
                name="language"
                component={renderSpecialization}
                label="specialization"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary create-guide-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  console.log("values", values);
  let errors = { username: "please enter the value" };
  return errors;
};

export default reduxForm({
  form: "Guide",
  validate
})(CreateGuide);

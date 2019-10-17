import React from "react";

export const renderInput = ({
  input,
  placeholder,
  type,
  label,
  meta: { error, touched }
}) => {
  return (
    <div className="form-group">
      <label for={label}>{label}</label>
      <input
        {...input}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
      <p style={{ color: "red" }}>{touched && error}</p>
    </div>
  );
};

export const renderTextArea = ({
  input,
  placeholder,
  type,
  label,
  meta: { error, touched }
}) => {
  console.log("touched", touched);
  return (
    <div className="form-group">
      <label for={label}>{label}</label>
      <textarea
        className="form-control"
        rows="3"
        {...input}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export const renderPreferredTrekkingRegion = ({
  input,
  placeholder,
  type,
  label,
  meta: { error, touched }
}) => {
  console.log("select");
  return (
    <div>
      <label for="exampleInputPassword1">Preferred Trekking region</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        {...input}
      >
        <option value="Annapurna Region">Annapurna Region</option>
        <option value="Langtang Region">Langtang Region</option>
        <option value="Manaslu Region">Manaslu Region</option>
      </select>
    </div>
  );
};

export const renderSafteyTraining = ({
  input,
  placeholder,
  type,
  label,
  meta: { error, touched }
}) => {
  return (
    <div className="form-group">
      <label for="wages">Saftey training</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        {...input}
      >
        <option>Rock Climbing Training</option>
        <option>Firstaid Training</option>
      </select>
    </div>
  );
};

export const renderLanguage = ({
  input,
  placeholder,
  type,
  label,
  meta: { error, touched }
}) => {
  return (
    <div className="form-group">
      <label for="wages">Languages</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        {...input}
      >
        <option value="">English</option>
        <option value="">Korean</option>
        <option value="">Japanese</option>
      </select>
    </div>
  );
};

export const renderSpecialization = ({
  input,
  placeholder,
  type,
  label,
  meta: { error, touched }
}) => {
  return (
    <div className="form-group">
      <label for="wages">Specialization</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        {...input}
      >
        <option>Trekking</option>
        <option>Peak Climbing</option>
        <option>camping treks</option>
      </select>
    </div>
  );
};

export const renderExpertiseRegion = ({
  input,
  placeholder,
  type,
  label,
  meta: { error, touched }
}) => {
  return (
    <div className="form-group">
      <label for="wages">Expertise Region</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        {...input}
      >
        <option>Annapurna Region</option>
        <option>Langtang Region</option>
        <option>Manaslu Region</option>
      </select>
    </div>
  );
};

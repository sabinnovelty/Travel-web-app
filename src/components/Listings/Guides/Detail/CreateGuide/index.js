import React, { Component } from "react";
import "./create-guide-form.css";

export default class CreateGuide extends Component {
  render() {
    return (
      <div className="create-guide">
        <form>
          <div className="contact-info">
            <h3> Introduction</h3>
            <div class="form-group">
              <label for="emailaddress">Introduction</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="emailaddress">Address</label>
              <input
                type="address"
                class="form-control"
                placeholder="Address"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">
                Preferred Trekking region
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Annapurna Region</option>
                <option>Langtang Region</option>
                <option>Manaslu Region</option>
              </select>
            </div>
          </div>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div class="form-group">
              <label for="emailaddress">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contact Number</label>
              <input
                type="number"
                class="form-control"
                placeholder="contact number"
              />
            </div>
          </div>

          <div className="contact-info">
            <h3>Personal Information</h3>
            <div class="form-group">
              <label for="wages">Daily Wages(USD per day)</label>
              <input
                type="number"
                class="form-control"
                placeholder="daily wages"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Experience in year</label>
              <input
                type="number"
                class="form-control"
                placeholder="experience"
              />
            </div>
            <div class="form-group">
              <label for="wages">Saftey training</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Rock Climbing Training</option>
                <option>Firstaid Training</option>
              </select>
            </div>

            <div class="form-group">
              <label for="wages">Languages</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>English</option>
                <option>Korean</option>
                <option>Japanese</option>
              </select>
            </div>

            <div class="form-group">
              <label for="wages">Expertise Region</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Annapurna Region</option>
                <option>Langtang Region</option>
                <option>Manaslu Region</option>
              </select>
            </div>

            <div class="form-group">
              <label for="wages">Specialization</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Trekking</option>
                <option>Peak Climbing</option>
                <option>camping treks</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary create-guide-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

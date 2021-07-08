import React, { Component } from 'react';

import { Form } from '../lib'

export default class Simple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstname: {
          value: '',
          validation: {
            output: "firstnameError",
            validators: [{
              type: "required",
              message: "Required Field."
            }]
          }
        },
        lastname: {
          value: '',
          validation: {
            output: "lastnameError",
            validators: [{
              type: "required",
              message: "Required Field."
            }]
          }
        },
        maritialState: {
          value: "1"
        },
        gender: {
          value: 'M'
        }
      }
    }
    this._onChangeForm = this._onChangeForm.bind(this);

  }

  _onSubmit = async (values, valid) => {
    if (valid.valid) {
      console.log(values, valid);
    }
  }

  _onChangeForm(form) {
    this.setState({ form })
  }

  render() {
    const { form } = this.state;
    const genders = ['M', 'F'];
    return (
      <div className="App">
        <Form submit={this._onSubmit} formControl={form} change={this._onChangeForm}>
          <div>
            First name:<br />
            <input type="text" id="firstname" name="firstname" />
            <br />
            <span id="firstnameError"></span>
          </div>
          <div>
            Last name:<br />
            <input type="text" id="lastname" name="lastname" />
            <br />
            <span id="lastnameError"></span>
          </div>
          <div>
            Gender:<br />
            {genders.map(s =>
              <>
                <label htmlFor={`gender_${s}`}>{s}</label>
                <input key={s} type="radio" id={`gender_${s}`} value={s} name="sexo" />
              </>)}
          </div>
          <div>
            Estado Civil:<br />
            <select id="estadoCivil" name="estadoCivil">
              <option value="0">Selecione</option>
              <option value="1">Casado</option>
              <option value="2">Solteiro</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </Form>
      </div>
    );
  }
}

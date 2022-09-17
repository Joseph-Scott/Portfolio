import React, { Component } from "react";
class FormComponent extends Component {
  render() {
    return (
      <div>
        <h2>Form</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
export default FormComponent;
import React from "react";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      isVegetarian: false,
      isKosher: false,
      isVegan: false,
      isGlutenFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit(event) {
    alert(
      "Your details have been submitted " +
        this.state.firstName +
        " we will get in touch shortly."
    );
    event.preventDefault();
  }

  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        {...this.state}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default FormContainer;

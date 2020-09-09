import React from "react";

class App extends React.Component {
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
    alert("Your details: " + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            value={this.state.age}
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />

          <select
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          >
            <option value="">Choose your destination</option>
            <option value="Japan">Japan</option>
            <option value="Argentina">Argentina</option>
            <option value="Mexico">Mexico</option>
          </select>
          <br />
          <label>Dietary restrictions</label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegetarian"
              checked={this.state.isVegetarian}
              onChange={this.handleChange}
            />
            Vegetarian
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.isKosher}
              onChange={this.handleChange}
            />
            Kosher
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.isVegan}
              onChange={this.handleChange}
            />
            Vegan
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isGlutenFree"
              checked={this.state.isGlutenFree}
              onChange={this.handleChange}
            />
            Gluten free
          </label>
          <br />
          <button type="submit" name="submit">
            Submit
          </button>
        </form>
        <hr />
        <h2>Entered Information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          {this.state.isVegetarian ? "Vegetarian," : ""}{" "}
          {this.state.isKosher ? "Kosher," : ""}{" "}
          {this.state.isVegan ? "Vegan," : ""}{" "}
          {this.state.isGlutenFree ? "Gluten Free" : ""}{" "}
        </p>
      </main>
    );
  }
}

export default App;

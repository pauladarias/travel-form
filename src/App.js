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
      diet: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <main>
        <form>
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
              type="checkbox"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="checkbox"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />
          <label>You are travelling to </label>

          <select
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          >
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
              name="diet"
              value="vegetarian"
              checked={this.state.diet === "vegetarian"}
              onChange={this.handleChange}
            />
            Vegetarian
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="diet"
              value="kosher"
              checked={this.state.diet === "kosher"}
              onChange={this.handleChange}
            />
            Kosher
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="diet"
              value="vegan"
              checked={this.state.diet === "vegan"}
              onChange={this.handleChange}
            />
            Vegan
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="diet"
              value="gluten free"
              checked={this.state.diet === "gluten free"}
              onChange={this.handleChange}
            />
            Gluten free
          </label>
          {/* check boxes for vegetarian, kosher, lactose free,*/}
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered Information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>Your dietary restrictions: {this.state.diet}</p>
      </main>
    );
  }
}

export default App;

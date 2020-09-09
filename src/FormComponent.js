import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="number"
          value={props.age}
          name="age"
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <br />

        <select
          name="location"
          value={props.location}
          onChange={props.handleChange}
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
            checked={props.isVegetarian}
            onChange={props.handleChange}
          />
          Vegetarian
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={props.isKosher}
            onChange={props.handleChange}
          />
          Kosher
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={props.isVegan}
            onChange={props.handleChange}
          />
          Vegan
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isGlutenFree"
            checked={props.isGlutenFree}
            onChange={props.handleChange}
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
        Your name: {props.firstName} {props.lastName}
      </p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.location}</p>
      <p>
        Your dietary restrictions:
        {"  "}
        {props.isVegetarian ? "Vegetarian" : ""}
        {"  "}
        {props.isKosher ? "Kosher" : ""}
        {"  "}
        {props.isVegan ? "Vegan" : ""}
        {"  "}
        {props.isGlutenFree ? "Gluten Free" : ""}
        {"  "}
      </p>
    </main>
  );
}

export default FormComponent;

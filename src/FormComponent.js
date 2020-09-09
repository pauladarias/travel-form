import React from "react";

function FormComponent(props) {
  return (
    <main>
      Fill in your details:
      <form onSubmit={props.handleSubmit}>
        <br />
        <input
          className="name"
          type="text"
          value={props.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          className="lastname"
          type="text"
          value={props.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          className="age"
          type="number"
          value={props.age}
          name="age"
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />
        <div className="gender">
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
        </div>
        <br />
        <select
          className="location"
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
        <label>Any dietary restrictions?</label>
        <div className="diet">
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
        </div>
        <button type="submit" name="submit">
          SUBMIT
        </button>
      </form>
      <hr />
      <h3>Entered Information:</h3>
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

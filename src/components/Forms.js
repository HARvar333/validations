import React, { useState } from "react";

const Forms = () => {
  const [state, setState] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const userObj = { state };
    console.log(userObj);
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <label htmlFor="fn">First name:</label>
        <input
          id="fn"
          type="text"
          autoComplete="off"
          onChange={(e)=>setState(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Forms;

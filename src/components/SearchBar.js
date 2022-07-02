import React, { useState } from "react";
const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form
        action=""
        className="ui form"
        onSubmit={onSubmit}
      >
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input
            type="text"
            onChange={(e)=>setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

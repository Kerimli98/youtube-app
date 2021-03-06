import React from "react";
class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          action=""
          className="ui form"
          onSubmit={(e) => this.onFormSubmit(e)}
        >
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              onChange={(e) => this.onInputChange(e)}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

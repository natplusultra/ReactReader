import React from "react";

const SearchForm = props => (
    <form>
        <div className="row">
            <div className="input-field col s4">
                <input id="topic" name="topic" type="text" value={props.topic} onChange={props.handleInputChange} required />
                <label htmlFor="topic">Topic</label>
            </div>
            <div className="input-field col s4">
                <input id="start_year" name="start_year" type="text" value={props.startYear} onChange={props.handleInputChange} required />
                <label htmlFor="start_year">Start Year</label>
            </div>
            <div className="input-field col s4">
                <input id="end_year" name="end_year" type="text" value={props.endYear} onChange={props.handleInputChange} required />
                <label htmlFor="end_year">End Year</label>
            </div>
        </div>
        <button type="submit" className="waves-effect waves-light btn btn-large" onClick={props.handleFormSubmit}><i className="material-icons left tiny">search</i> Search</button>
    </form>
)

export default SearchForm;
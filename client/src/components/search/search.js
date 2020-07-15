import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    state = {
        searchValue: ''
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.callbackfromNavBar(this.state.searchValue);
    }
    render() {
        const { callbackfromNavBar } = this.props;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Query Articles: </label>
                <input type='search' name='search' name='searchValue' value={this.state.searchValue} onChange={this.handleChange.bind(this)}></input>
                <button type='submit' >Search Articles</button>
            </form>
        )
    }
}
export default Search;
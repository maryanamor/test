import React, {Component} from "react";

class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSerchChange(term);
    };

    render(){
        const searchText = 'Type here to search';
        const searchStyle = {
            fontSize: '14px'
        };

        return(
            <input
                type="text"
                className="form-control search-input"
                placeholder={searchText}
                style={searchStyle}
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        )
    }
}

export default SearchPanel;
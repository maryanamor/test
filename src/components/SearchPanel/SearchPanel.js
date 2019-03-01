import React from "react";

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '14px'
    }
    return <input
        type="text"
        className="form-control search-input"
        placeholder={searchText}
        style={searchStyle}
    />
};

export default SearchPanel;
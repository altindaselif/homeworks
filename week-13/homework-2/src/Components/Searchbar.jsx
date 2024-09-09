import React from "react";

function Searchbar({ onSearch }) {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Name/Model"
                onChange={handleChange}
            />
        </div>
    );
}

export default Searchbar;

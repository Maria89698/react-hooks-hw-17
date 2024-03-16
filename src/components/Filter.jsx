import React from 'react';

export function Filter({ value, onChange }) {

    const handleChange = (event) => {
        onChange(event.target.value);
      };
    return (
        <input
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={handleChange}
        />
    );
}
import React, { useState } from 'react';

const Pane = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePane = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? "pane open" : "pane"}>
            <h3>Side Pane</h3>
            <p>Content goes here...</p>
            <button className="toggle-btn" onClick={togglePane}>
                &#9776;
            </button>
        </div>
    );
};

export default Pane;

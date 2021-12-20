import React from 'react';
import {Link} from "react-router-dom";
import "./Button.css"

function Button({adress, content}) {
    return (

        <button type="button">
            <Link to={adress}>{content}</Link>
        </button>

    );
}

export default Button;
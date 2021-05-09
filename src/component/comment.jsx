import React from 'react';
import {Link} from "react-router-dom";

const comment = ({body, email, id, name}) => {
    return (
        <div className='d-flex mb-3 p-4 bg-light border flex-column'>
            <Link to={`/user/${id}`}>
                {name} :
            </Link>
            <small>{email}</small>

            <p className='mt-2'>
                {body}
            </p>
        </div>
    )
};

export default comment;

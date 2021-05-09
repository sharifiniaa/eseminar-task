import React from 'react';
import {Link} from "react-router-dom";


const Card = ({title, body, id, user, comments}) => {
    return (
        <div className='d-flex align-items-center text-left flex-column border p-2 mb-2'>
            <Link className='mr-auto mb-2' to={`/posts/${id}`}>
                <h4>{title}</h4>
            </Link>
            <small className='mr-auto font-weight-bold mb-2'>
                {user?.name}
            </small>
            <p>
                {body}
            </p>
            <small className='mr-auto'>
                comments: {comments?.length}
            </small>
        </div>
    )
};


export default Card;

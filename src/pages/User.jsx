import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const User = () => {
    let {id} = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUserData(data)
        }
        catch (e) {
            //
        }
    }

    return (
        <div>
            <div className='card'>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 lead">{userData?.username}</h6>
                    <h5 className="card-title">{userData?.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{userData?.email}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{userData?.phone}</h6>
                    <a href={userData?.website} target="_blank" className="card-link">{userData?.website}</a>
                </div>
            </div>
        </div>
    )
};

export default User;

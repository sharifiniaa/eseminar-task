import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "../component/card";
import Spinner from "../component/spinner/spinner";

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetchPosts();
        fetchComments();
    }, [])



    const fetchComments = async() => {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setComments(data)
        }
        catch (e) {
            //
        }
    }

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(data);
            getAllUsersIds(data)
        } catch (e) {
            //
        } finally {
            setLoading(false)
        }
    }

    const getAllUsersIds = (data) => {
        const unitSet = new Set(data.map(post => post.userId))
        const usersRequests = [];
        unitSet.forEach(user => {
            return usersRequests.push(axios.get(`https://jsonplaceholder.typicode.com/users/${user}`))
        })
        Promise.all(usersRequests).then(response => {
            const data = response.map(el => el.data);
            setUsers(prevState => ([...prevState, ...data]))
        })
    };

    return (
        <div className='col-12'>
            <div className='row'>
                {posts ? posts?.map((el, i) => {
                    return (
                        <div className='col-12 mt-2'>
                            <Card comments={comments && comments.filter(comment => comment.postId === el.id)} user={users && users.find(user => user.id === el.userId)} id={el.id} key={i} body={el.body} title={el.title}/>
                        </div>
                    )
                }) : (
                    <Spinner />
                )}
            </div>
        </div>
    )
};

export default Home;

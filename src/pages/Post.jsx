import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import Comment from '../component/comment'


const Post = () => {
    let {id} = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null)

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, [])

    const fetchComments = async() => {
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            setComments(data)
        }
        catch (e) {
            //
        }
    }

    const fetchPost = async () => {
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPost(data);
        }
        catch (err){
            //
        }
    }


    return (
            <React.Fragment>
                <div className="my-2 jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{post?.title}</h1>
                        <p className="lead">{post?.body}</p>
                    </div>
                </div>
                <div className='comment-wrapper mt-5'>
                    <h4 className='mb-4'>Comments <span className="badge badge-secondary">{comments?.length}</span></h4>

                    {comments?.map(comment => <Comment key={comment.id} {...comment}/>)}
                </div>
            </React.Fragment>
    )
};

export default Post;

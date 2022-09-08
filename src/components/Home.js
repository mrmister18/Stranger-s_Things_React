import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

const Home = (props) => {
    const { loginToken, posts, fetchPosts } = props
    const navigate = useNavigate()

    useEffect(() => {fetchPosts()}, [])
    return <div className='posts'>
        <h1 className='title'>Home</h1>
        <form><input></input><button onClick={(event) => event.preventDefault()}>Search</button></form><button onClick={(event) => {event.preventDefault()
        loginToken ? navigate("/addpost") : navigate("/account/login")}}>Add a new post</button>
        {loginToken ? <h1>Logged in</h1> : null}
        {posts.map((post) => {
            return <div className='post' key={post._id}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <p>{post.author.username}</p>
                <p>{post.location}</p>
                <p>{post.willDeliver ? "Will Deliver" : "Will not Deliver"}</p>
                <Link to={post._id}><button>Edit Post</button></Link>
            </div>
        })}
    </div>
}

export default Home;
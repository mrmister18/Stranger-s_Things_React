import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const [posts, setPosts] = useState([])
    const { loginToken } = props
    const navigate = useNavigate()

    async function fetchPosts() {
        try {const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/posts')
            const data = await response.json()
            const posts = data.data.posts
            setPosts(posts)
            }
        catch (err) {
          throw err
        }
      }

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
            </div>
        })}
    </div>
}

export default Home;
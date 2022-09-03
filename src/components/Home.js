import React, { useEffect, useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([])

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
        {posts.map((post) => {
            return <div className='post' key={post.id}>
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
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

const Home = (props) => {
    const { loginToken, posts, setPosts, fetchPosts, setTitle, setDescription, setPrice, setLocation, setWillDeliver, setPostId, setPostUser } = props
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const filteredPosts = posts.filter(post => (post.title+post.description+post.author.username+post.location).toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {fetchPosts()}, [])

    return <div className='posts'>
        <h1 className='title'>Home</h1>
        <form>
          <input onChange={(event) => setSearch(event.target.value)}></input>(search)
          </form>
          <button onClick={(event) => {event.preventDefault()
        loginToken ? navigate("/addpost") : navigate("/account/login")}}>Add a new post</button>
        {/* Select doesn't update the posts to reverse order until the search value changes */}
        {/* <select onChange={() => setPosts(posts.reverse())}>
          <option>Oldest</option>
          <option>Newest</option>
        </select> */}
        {loginToken ? <h1>Logged in</h1> : null}
        {filteredPosts.map((post) => {
            return <div className='post' key={post._id}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <p>{post.author.username}</p>
                <p>{post.location}</p>
                <p>{post.willDeliver ? "Will Deliver" : "Will not Deliver"}</p>
                {post.isAuthor ? <Link to={`/post/${post._id}`}><button onClick={() => {
                  setTitle(post.title)
                  setDescription(post.description)
                  setPrice(post.price)
                  setLocation(post.location)
                  setWillDeliver(post.willDeliver)
                  setPostId(post._id)
                }}>Edit Post</button></Link> : null}
                {post.isAuthor || !loginToken ? null : <Link to={`/message/${post._id}`}><button onClick={() => {
                  setTitle(post.title)
                  setDescription(post.description)
                  setPrice(post.price)
                  setLocation(post.location)
                  setWillDeliver(post.willDeliver)
                  setPostId(post._id)
                  setPostUser(post.author.username)
                }}>Message User</button></Link>}
            </div>
        })}
    </div>
}

export default Home;
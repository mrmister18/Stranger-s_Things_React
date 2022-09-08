import { createRoot } from "react-dom/client"
import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { Addpost, Editpost, Home, Login, Profile, Signup } from './components'

const Nav = (props) => {
    const { loginToken, setLoginToken } = props

    return <nav>
    <span className="title">Stranger's Things</span>
    <Link to="/"><span>Home</span></Link>
    {loginToken ? <Link to={"/account/profile"}><span>Profile</span></Link> : null}
    {loginToken ? <button onClick={() => setLoginToken("")}>Log out</button> : <Link to="/account/login"><span>Login</span></Link>}
</nav>
}

const App = () => {
    const [loginToken, setLoginToken] = useState("")
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [willDeliver, setWillDeliver] = useState(false)
    const { postid } = useParams()

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

    return <BrowserRouter>
    <div>
        <Routes>
            <Route path="/" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken} /><Home posts={posts} loginToken={loginToken} fetchPosts={fetchPosts} /></>}></Route>
            <Route path="/account/login" element={<><Nav /><Login setLoginToken={setLoginToken} loginToken={loginToken} /></>}></Route>
            <Route path="/account/signup" element={<><Nav /><Signup setLoginToken={setLoginToken} loginToken={loginToken} /></>}></Route>
            <Route path="/account/profile" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken}  /><Profile loginToken={loginToken} title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} willDeliver={willDeliver} setWillDeliver={setWillDeliver} location={location} setLocation={setLocation} /></>}></Route>
            <Route path="/addpost" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken} /><Addpost title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} willDeliver={willDeliver} setWillDeliver={setWillDeliver} location={location} setLocation={setLocation} loginToken={loginToken} /></>}></Route>
            <Route path="/:postid" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken}/><Editpost title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} willDeliver={willDeliver} setWillDeliver={setWillDeliver} location={location} setLocation={setLocation} /></>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
}

const root = createRoot(document.getElementById("app"))
root.render(<App />)
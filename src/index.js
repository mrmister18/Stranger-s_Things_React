import { createRoot } from "react-dom/client"
import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { Addpost, Editpost, Home, Login, Profile, Signup, Message } from './components'

const Nav = (props) => {
    const { loginToken, setLoginToken } = props

    return <nav>
    <span className="title">Stranger's Things</span>
    <Link to="/"><span>Home</span></Link>
    {loginToken ? <><Link to={"/account/profile"}><span>Profile</span></Link><Link to='/'><span onClick={() => setLoginToken("")}>Log out</span></Link></> : <><Link to="/account/login"><span>Login</span></Link><Link to="/account/signup"><span>Register</span></Link></>}
</nav>
}

const App = () => {
    const [loginToken, setLoginToken] = useState(window.localStorage.getItem('loginToken') || "")
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [willDeliver, setWillDeliver] = useState(false)
    const [postId, setPostId] = useState("")
    const [postUser, setPostUser] = useState("")
    const { postid } = useParams()

    useEffect(() => {window.localStorage.setItem('loginToken', loginToken)}, [loginToken])

    async function fetchPosts() {
        if (loginToken) {
            fetch('https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/posts/', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${loginToken}`
  },
}).then(response => response.json())
  .then(result => {
    setPosts(result.data.posts);
  })
  .catch(console.error);
        }
        else {try {const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/posts')
            const data = await response.json()
            const posts = data.data.posts
            setPosts(posts)
            }
        catch (err) {
          throw err
        }}
      }

    return <BrowserRouter>
    <div>
        <Routes>
            <Route path="/" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken} /><Home setPosts={setPosts} setPostUser={setPostUser} posts={posts} loginToken={loginToken} fetchPosts={fetchPosts} setTitle={setTitle} setPrice={setPrice} setLocation={setLocation} setDescription={setDescription} setWillDeliver={setWillDeliver} /></>}></Route>
            <Route path="/account/login" element={<><Nav /><Login setLoginToken={setLoginToken} loginToken={loginToken} /></>}></Route>
            <Route path="/account/signup" element={<><Nav /><Signup setLoginToken={setLoginToken} loginToken={loginToken} /></>}></Route>
            <Route path="/account/profile" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken}  /><Profile setPostId={setPostId} postId={postId} loginToken={loginToken} title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} willDeliver={willDeliver} setWillDeliver={setWillDeliver} location={location} setLocation={setLocation} /></>}></Route>
            <Route path="/addpost" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken} /><Addpost fetchPosts={fetchPosts} title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} willDeliver={willDeliver} setWillDeliver={setWillDeliver} location={location} setLocation={setLocation} loginToken={loginToken} /></>}></Route>
            <Route path="/post/:postid" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken}/><Editpost fetchPosts={fetchPosts} loginToken={loginToken} postId={postId} title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} willDeliver={willDeliver} setWillDeliver={setWillDeliver} location={location} setLocation={setLocation} /></>}></Route>
            <Route path="/message/:postid" element={<><Nav loginToken={loginToken} setLoginToken={setLoginToken} /><Message postId={postId} loginToken={loginToken} postUser={postUser} title={title} description={description} price={price} location={location} willDeliver={willDeliver} /></>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
}

const root = createRoot(document.getElementById("app"))
root.render(<App />)
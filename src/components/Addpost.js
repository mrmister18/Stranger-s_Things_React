import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Addpost = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [willDeliver, setWillDeliver] = useState(false)
    const [newPost, setNewPost] = useState({})
    const { loginToken } = props
    const navigate = useNavigate()

    const createNewPost = () => {
        if (location) {fetch('https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/posts', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${loginToken}`
            },
            body: JSON.stringify({
              post: {
                title: title,
                description: description,
                price: '$' + price,
                location: location,
                willDeliver: willDeliver
              }
            })
          }).then(response => response.json())
            .then(result => {
                console.log(result)
              setNewPost(result);
            })
            .catch(console.error);}
        else {fetch('https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/posts', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${loginToken}`
            },
            body: JSON.stringify({
              post: {
                title: title,
                description: description,
                price: '$' + price,
                willDeliver: willDeliver
              }
            })
          }).then(response => response.json())
            .then(result => {
                console.log(result)
              setNewPost(result);
            })
            .catch(console.error);}
    }

    return <div className='addpost'>
        <h1>Add New Post</h1>
        <form onSubmit={(event) => {event.preventDefault()
        title && description && price ? createNewPost() : alert("Please fill out all required fields")
        newPost ? navigate("/") : null}}>
        <label htmlFor='title'>Title</label>
        <input onChange={(event) => setTitle(event.target.value)} id='title' required></input><br />
        <label htmlFor='description'>Description</label>
        <input onChange={(event) => setDescription(event.target.value)} id='description' required></input><br />
        <label htmlFor='price'>Price</label>
        <input onChange={(event) => setPrice(event.target.value)} id='price' type='number' minValue='0' required></input><br />
        <label htmlFor='location'>Location</label>
        <input onChange={(event) => setLocation(event.target.value)} id='location'></input><span>(optional)</span><br />
        <label htmlFor='deliver'>Willing to deliver?</label>
        <input type="checkbox" onChange={() => willDeliver ? setWillDeliver(false) : setWillDeliver(true)}></input><br />
        <button>Post</button>
        </form>
    </div>
}

export default Addpost;
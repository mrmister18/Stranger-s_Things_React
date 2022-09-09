import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editpost = (props) => {
    const { loginToken, fetchPosts, postId, title, setTitle, description, setDescription, price, setPrice, location, setLocation, willDeliver, setWillDeliver } = props
    const [editedPost, setEditedPost] = useState({})
    const navigate = useNavigate()

    const deletePost = () => {
        fetch(`https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/posts/${postId}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${loginToken}`
  }
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
    }

    const editPost = () => {
        fetch(`https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/posts/${postId}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${loginToken}`
            },
            body: JSON.stringify({
              post: {
                title: title,
                description: description,
                price: price,
                location: location,
                willDeliver: willDeliver
              }
            })
          }).then(response => response.json())
            .then(result => {
              setEditedPost(result);
            })
            .catch(console.error);
    }

return <div className='editpost'>
        <h1>Edit Post</h1>
        <form onSubmit={(event) => {event.preventDefault()
        title && description && price ? editPost() : alert("Please fill out all required fields")
        fetchPosts()
        editedPost ? navigate("/") : null}}>
        <label htmlFor='title'>Title</label>
        <input onChange={(event) => setTitle(event.target.value)} id='title' value={title} required></input>*<br />
        <label htmlFor='description'>Description</label>
        <input onChange={(event) => setDescription(event.target.value)} id='description' value={description} required></input>*<br />
        <label htmlFor='price'>Price</label>
        <input onChange={(event) => setPrice(event.target.value)} step='0.01' value={price} required></input>*<br />
        <label htmlFor='location'>Location</label>
        <input onChange={(event) => setLocation(event.target.value)} id='location' value={location}></input><span>(optional)</span><br />
        <label htmlFor='deliver'>Willing to deliver?</label>
        <input type="checkbox" onChange={() => willDeliver ? setWillDeliver(false) : setWillDeliver(true)} checked={willDeliver}></input><br />
        <button>Update Post</button>
        </form>
        <button onClick={() => {deletePost()
        navigate('/account/profile')}}>DELETE</button>
    </div> 
}

export default Editpost;
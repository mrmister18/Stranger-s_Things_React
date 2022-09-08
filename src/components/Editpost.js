import React, { useEffect, useState } from 'react';

const Editpost = (props) => {
    const { loginToken, title, setTitle, description, setDescription, price, setPrice, location, setLocation, willDeliver, setWillDeliver } = props

    return <div className='editpost'>
        <h1>Edit Post</h1>
        <form onSubmit={(event) => {event.preventDefault()
        // title && description && price ? createNewPost() : alert("Please fill out all required fields")
        newPost ? navigate("/") : null}}>
        <label htmlFor='title'>Title</label>
        <input onChange={(event) => setTitle(event.target.value)} id='title' value={title} required></input>*<br />
        <label htmlFor='description'>Description</label>
        <input onChange={(event) => setDescription(event.target.value)} id='description' value={description} required></input>*<br />
        <label htmlFor='price'>Price</label>
        <input onChange={(event) => setPrice(event.target.value)} id='price' value={price} required></input>*<br />
        <label htmlFor='location'>Location</label>
        <input onChange={(event) => setLocation(event.target.value)} id='location' value={location}></input><span>(optional)</span><br />
        <label htmlFor='deliver'>Willing to deliver?</label>
        <input type="checkbox" onChange={() => willDeliver ? setWillDeliver(false) : setWillDeliver(true)} checked={willDeliver}></input><br />
        <button>Update Post</button><button>DELETE</button>
        </form>
    </div> 
}

export default Editpost;
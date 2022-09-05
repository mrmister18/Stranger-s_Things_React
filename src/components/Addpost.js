import React, { useEffect, useState } from 'react';

const Addpost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [willDeliver, setWillDeliver] = useState(false)
    
    return <div className='addpost'>
        <h1>Add New Post</h1>
        <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor='title'>Title</label>
        <input onChange={(event) => setTitle(event.target.value)} id='title'></input><br />
        <label htmlFor='description'>Description</label>
        <input onChange={(event) => setDescription(event.target.value)} id='description'></input><br />
        <label htmlFor='price'>Price</label>
        <input onChange={(event) => setPrice(event.target.value)} id='price'></input><br />
        <label htmlFor='location'>Location</label>
        <input onChange={(event) => setLocation(event.target.value)} id='location'></input><span>(optional)</span><br />
        <label htmlFor='deliver'>Willing to deliver?</label>
        <input type="checkbox" onChange={() => willDeliver ? setWillDeliver(false) : setWillDeliver(true)}></input><br />
        <button>Post</button>
        </form>
    </div>
}

export default Addpost;
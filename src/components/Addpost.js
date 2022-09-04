import React, { useEffect, useState } from 'react';

const Addpost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [willDeliver, setWillDeliver] = useState(false)

    return <div className='addpost'>
        <h1>Add New Post</h1>
        <form>
        <label>Title</label>
        <input></input>
        </form>
    </div>
}

export default Addpost;
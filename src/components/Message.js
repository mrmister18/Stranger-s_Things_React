import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const Message = (props) => {
    const { title, description, postUser, price, location, willDeliver, loginToken, postId } = props;
    const [message, setMessage] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    async function sendMessage() {
        fetch(`https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/posts/${params.postid}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${loginToken}`
  },
  body: JSON.stringify({
    message: {
      content: message
    }
  })
}).then(response => response.json())
  .catch(console.error);
  navigate('/')
    }

    return <div className="message">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p>{postUser}</p>
        <p>{price}</p>
        <p>{location}</p>
        <p>{willDeliver ? "Will Deliver" : "Will not Deliver"}</p>
        <form onSubmit={(event) => {event.preventDefault()
        message ? sendMessage() : alert("Please fill out message form")}}>
            <input className='messageForm' onChange={(event) => {setMessage(event.target.value)}} required></input>
            <button>Send Message</button>
        </form>
    </div>
}

export default Message;
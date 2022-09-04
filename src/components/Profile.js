import React, { useEffect, useState } from 'react';

const Profile = (props) => {
    const [messages, setMessages] = useState([])
    const [myPosts, setMyPosts] = useState([])
    const { loginToken } = props

    async function fetchMessages() {
        fetch('https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${loginToken}`
  },
}).then(response => response.json())
  .then(result => {
    setMessages(result.data.posts);
  })
  .catch(console.error);
    }

    useEffect(() => {fetchMessages()}, [])
    console.log(messages)
    return <div className='profile'>
        <h1 className="messages">Messages</h1>
        {messages.length ? messages.map((message) => {
            <div className="message" key={message._id}>
                <h2>From: {message.fromUser.username}</h2>
                <h3>{message.post.title}</h3>
                <p>{message.content}</p>
            </div>
        }) : <h2>You have no messages</h2>}
        <div className="myposts">My Posts</div>
    </div>
}

export default Profile;
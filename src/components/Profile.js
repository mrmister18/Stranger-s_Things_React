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
    setMyPosts(result.data.posts);
  })
  .catch(console.error);
    }

    async function fetchUserPosts() {
      fetch('https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/users/me', {
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${loginToken}`
},
}).then(response => response.json())
.then(result => {
  setMyPosts(result.data.messages);
})
.catch(console.error);
  }

    useEffect(() => {fetchMessages()}, [])
    return <div className='profile'>
        <h1 className="messages">Messages</h1>
        {messages.length ? messages.map((message) => {
            return <div className="message" key={message._id}>
                <h2>From: {message.fromUser.username}</h2>
                <h3>{message.post.title}</h3>
                <p>{message.content}</p>
            </div>
        }) : <h2>You have no messages</h2>}
        <h1 className="myposts">My Posts</h1>
        {myPosts.length ? myPosts.map((post) => {
            return <div className="message" key={post._id}>
                <h2>{post.title}</h2>
                <h3>{post.description}</h3>
                <p>{post.price}</p>
                <p>{post.location}</p>
            </div>
        }) : <h2>You have no posts</h2>}
    </div>
}

export default Profile;
import React from 'react'
import "./messages.css"

export default function Messages() {
  return (
    <div className="messages">
      <div className="messagesContainer">
        <div className="messageList">
          <div className="messageListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="messageListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="messageListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="messageListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="messageListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="messageListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="messageListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="messageListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
        </div>

        <div className="messageWrapper">
          <div className="heading">
            <a href="#"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
            <h3 className="name">Anna Becker</h3>
            <a href="#"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
          </div>
          <div className="chatbox">
            <div className="first"><p>Hi how are you doing?</p></div>
            <div className="second"><p>Im good business has been good lately we got 200 new users in the last moth!</p></div>
            <div className="first"><p>Thats great to hear!</p></div>
            <div className="first"><p>You know by chance when my products are arriving it has been over 3 weeks.</p></div>
          </div>
          <div className="reply" id="reply">
            <input className="replyInput" type="text" placeholder="Type something" />
            <button className="replyButton">Send</button>
          </div>

        </div>
      </div>
    </div>
  )
}

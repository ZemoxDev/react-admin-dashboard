import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="john" />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="John Smith" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="john@gmail.com" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="passsword" />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+12346677" />
            </div>
            <div className="newUserItem">
                <label>Location</label>
                <input type="text" placeholder="New York" />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label for="male">Male</label>

                  <input type="radio" name="gender" id="female" value="female" />
                  <label for="female">Female</label>

                  <input type="radio" name="gender" id="other" value="other" />
                  <label for="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
        </form>
        <button className="newUserButton">Create</button>
    </div>
  )
}

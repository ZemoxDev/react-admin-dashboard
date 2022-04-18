import React from 'react'
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="settingsRow">
          <h2 className="settingsTitle">Settings</h2>
          <div className="settingsContent">
            <div className="settingsInputContainer">
              <label for="shop">Shop Name:</label>
              <input type="text" placeholder="Shopping" id="shop-name" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="shop">Shop Owner:</label>
              <input type="text" placeholder="John Doe" id="shop-owner" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="shop">Email:</label>
              <input type="text" placeholder="test@test.com" id="email" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="shop">Bank Account:</label>
              <input type="text" placeholder="IBAN" id="bank" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="shop">Company:</label>
              <input type="text" placeholder="Test GmbH" id="company" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="shop">Family Friendly:</label>
              <input type="checkbox" id="company" className="settingsCheckbox"/>
            </div>
          </div>

          <h2 className="settingsTitle">Privacy</h2>
          <div className="settingsContent">
            <div className="settingsInputContainer">
              <label for="track">Track Users:</label>
              <input type="checkbox" id="track" className="settingsCheckbox"/>
            </div>
            <div className="settingsInputContainer">
              <label for="save">Save Userdata:</label>
              <input type="checkbox" id="save" className="settingsCheckbox"/>
            </div>
            <div className="settingsInputContainer">
              <label for="track-time">Save Userdata Time:</label>
              <select id="track-time" className="settingsInput">
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="9 Months">9 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </div>
            <div className="settingsInputContainer">
              <label for="consent">Show Cookie Consent:</label>
              <input type="checkbox" id="consent" className="settingsCheckbox"/>
            </div>
          </div>
          <button className="settingsUpdateButton">Update</button>
        </div>
        <div className="settingsRow">
          <h2 className="settingsTitle">Google Services</h2>
          <div className="settingsContent">
            <div className="settingsInputContainer">
              <label for="token">Google API Token:</label>
              <input type="text" placeholder="12aad1..." id="token" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="g-email">Google Account Email:</label>
              <input type="email" placeholder="test@test.com" id="g-email" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="g-password">Google Account Password:</label>
              <input type="password" placeholder="password" id="g-password" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="shop">Show Ads:</label>
              <input type="checkbox" id="ads" className="settingsCheckbox"/>
            </div>
            <div className="settingsInputContainer">
              <label for="dashboard">Use Google Dashboard:</label>
              <input type="checkbox" id="dashboard" className="settingsCheckbox"/>
            </div>
          </div>

          <h2 className="settingsTitle">SEO Tools</h2>
          <div className="settingsContent">
            <div className="settingsInputContainer">
              <label for="permalink">Permalink:</label>
              <input type="text" placeholder="dashboard-test" id="permalink" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="meta">Meta-Description:</label>
              <input type="text" placeholder="Dashboard Test" id="meta" className="settingsInput"/>
            </div>
            <div className="settingsInputContainer">
              <label for="lighthouse">Use Google Lighthouse:</label>
              <input type="checkbox" id="lighthouse" className="settingsCheckbox"/>
            </div>
            <div className="settingsInputContainer">
              <label for="insights">Generate SEO Insights:</label>
              <input type="checkbox" id="insights" className="settingsCheckbox"/>
            </div>
            <div className="settingsInputContainer">
              <label for="sitemap">Generate Sitemap:</label>
              <input type="checkbox" id="sitemap" className="settingsCheckbox"/>
            </div>
            <div className="settingsInputContainer">
              <label for="robots">Generate robots.txt:</label>
              <input type="checkbox" id="robots" className="settingsCheckbox"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

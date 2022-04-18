import React from 'react'
import "./media.css"
import { Publish } from '@material-ui/icons';
import {Link} from 'react-router-dom';

export default function Media() {
  return (
    <div className="media">
      <div className="mediaContainer">
        <div className="mediaTitleContainer">
          <h2 className="mediaTitle">Media</h2>
          <label for="file"><Publish className="mediaUpdate"/></label>
          <input type="file" id="file" style={{display: "none"}} />
        </div>
        <div className="mediaRow">
          <img src={require('../../frau.jpg')} alt="frau" className="mediaImg"/>
          <img src={require('../../mann.jpg')} alt="mann" className="mediaImg"/>
          <img src={require('../../frau.jpg')} alt="frau" className="mediaImg"/>
          <img src="" className="mediaImg"/>
          <img src="" className="mediaImg"/>
          <img src={require('../../frau.jpg')} alt="frau" className="mediaImg"/>
          <img src={require('../../mann.jpg')} alt="mann" className="mediaImg"/>
          <img src="" className="mediaImg"/>
          <img src={require('../../frau.jpg')} alt="frau" className="mediaImg"/>
          <img src={require('../../mann.jpg')} alt="mann" className="mediaImg"/>
          <img src="" className="mediaImg"/>
        </div>
      </div>
    </div>
  )
}

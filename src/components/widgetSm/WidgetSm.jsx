import React from 'react'
import "./widgetSm.css"

import {Visibility} from '@material-ui/icons';
import {Link} from 'react-router-dom';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <h3 className="widgetSmTitle"> New Members </h3>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> Anna Keller </span>
              <span className="widgetSmUserTitle"> Software Engineer </span>
            </div>
            <Link to={"/user/" + 1}>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                <span>Display</span>
              </button>
            </Link>
          </li>

          <li className="widgetSmListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> Anna Keller </span>
              <span className="widgetSmUserTitle"> Software Engineer </span>
            </div>
            <Link to={"/user/" + 1}>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                <span>Display</span>
              </button>
            </Link>
          </li>

          <li className="widgetSmListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> Anna Keller </span>
              <span className="widgetSmUserTitle"> Software Engineer </span>
            </div>
            <Link to={"/user/" + 1}>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                <span>Display</span>
              </button>
            </Link>
          </li>

          <li className="widgetSmListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> Anna Keller </span>
              <span className="widgetSmUserTitle"> Software Engineer </span>
            </div>
            <Link to={"/user/" + 1}>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                <span>Display</span>
              </button>
            </Link>
          </li>

          <li className="widgetSmListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> Anna Keller </span>
              <span className="widgetSmUserTitle"> Software Engineer </span>
            </div>
            <Link to={"/user/" + 1}>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                <span>Display</span>
              </button>
            </Link>
          </li>

          <li className="widgetSmListItem">
            <img src={require('../../frau.jpg')} alt="frau" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> Anna Keller </span>
              <span className="widgetSmUserTitle"> Software Engineer </span>
            </div>
            <Link to={"/user/" + 1}>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                <span>Display</span>
              </button>
            </Link>
          </li>
        </ul>
    </div>
  )
}
import React, {} from "react";
import '../App.css';
import {SidebarData} from "./SidebarData";
import {Testall} from "./Testall";
import logo from './cumanlogo1.png'
import app from "../App";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar(){
    return(
        <div className="Sidebar">
            <div id="logo" style={{display: "flex",justifyContent: "center"}}>
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <hr className="line"color="B1C900"/>
            <ul className="Testing">
                {Testall.map((val, key)=>{
                        return(
                            <button key={key}
                                className="testall"
                                id={window.location.pathname == val.path ? "active" : ""}
                                onClick={()=> {window.location.pathname = val.path}}>
                                {" "}
                                <div id="title">{val.title}</div>
                            </button>
                        );
                    }
                )}
            </ul>
            <ul className="SidebarList">
            {SidebarData.map((val, key)=>{
        return(
            <li key={key}
                className="path"
                 id={window.location.pathname == val.path ? "active" : ""}
                 onClick={()=> {window.location.pathname = val.path}}>
                {window.location.pathname == val.path ? <div className={"pathGreen"}></div> : ""}
                 <div
                     id="title"
                     className={window.location.pathname==val.path ? "activeShadow" : ""}
                 >{val.title}</div>

            </li>
        );
        }
    )}
        </ul>
    </div>
    );
}
export default Sidebar;
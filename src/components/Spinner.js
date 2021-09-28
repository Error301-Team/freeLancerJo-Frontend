import React, { Component } from 'react'
import "./spinner.css"
import logoGif from "../assets/logoGif.gif"
import $ from 'jquery';


export class Spinner extends Component {

    render() {
        return (
            <div onLoad={
                $(document).ready(function () {
                    $('#logogif').delay(1000).fadeOut(1000);
                    $('#spinner').delay(1000).fadeOut(1000);
                })
            }>
                <div id="spinner" style={{position: "fixed", top:"0"}}>
                    <img id="logogif" src={logoGif} alt="" style={{ zIndex: "100" }} />
                </div>
            </div>
        )
    }
}

export default Spinner

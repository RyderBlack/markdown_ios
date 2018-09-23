import React, { Component } from 'react';
import '../App.css';

export default class Details extends Component {

  
  render() {
    return (
        <div className="row justify-content-center">
        {this.props.details.map((startup) => {
          const linkImg = 'https://images.startupopenhouse.com/thumbnail?colorspace=srgb&width=128&url=https://s3.amazonaws.com/soh-pwa-files-production/';
          //console.log(startup.props.logo_square.props.uri)
          return (
        <div key={startup.props.id} className={ startup.props.hiring ? "col-md-3 bg-success" : "col-md-3 bg-danger"}>
            <div className="card text-white bg-default mb-3" style={{"maxWidth": "18rem"}}>
                <div className="card-header">
                <img className="card-img" src={linkImg+ startup.props.logo_square.props.uri} style={{"maxHeight": "120px"}} alt="logo"/>
                </div>
                <div className="card-body" style={{"color": '#222', 'padding': '15px'}}>
                    <h5 className="card-title">{startup.props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        )
        })}
        {/*console.log(this.state.startups)*/}
        </div>
    )}
}

import React, { Component } from 'react';
import '../App.css';

export default class Details extends Component {

  
  render() {
    return (
        <div className="row justify-content-center">
        {this.props.details.map((coin) => {
          const linkImg = 'https://images.startupopenhouse.com/thumbnail?colorspace=srgb&width=128&url=https://s3.amazonaws.com/soh-pwa-files-production/';
         
          return (
        <div key={coin.props.id} className="col-md-8 center" style={{marginBottom: '20px', padding: '15px'}}>
            <div className={coin.props.hiring ? "row text-white bg-success" : "row text-white bg-danger"} >
                <div className="col-md-2">
                <img className="card-img" src={linkImg+coin.props.logo_square.props.uri} style={{"maxHeight": "120px"}} alt="logo"/>
                </div>
                <div className="col-md-10" style={{padding: '15px'}}>
                    <h5 className="card-title">{coin.props.name}</h5>
                    <p className="card-text">{coin.props.about}</p>
                </div>
            </div>
        </div>
        )
        })}
        {/*console.log(this.state.startups)*/}
        </div>
    )}
}

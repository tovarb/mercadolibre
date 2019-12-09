import React, { Component } from 'react';
import './Discover.css';

class Discover extends Component {

    render(){
        return(
            <div id="generalContainer">
                <h1 >Descubre</h1>
                <div className="row card-cont">
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body row">
                            <div className="col-sm-6">
                                <p className="card-text">NAVIDAD</p>
                                <h5 className="card-title">UNA CENA <br/> INOLVIDABLE</h5>
                                <a href="https://www.mercadolibre.com.mx/" className="btn btn-primary">Ver más</a>
                            </div>
                            <div className="col-sm-6">
                                <img className="card-img-top discover" src= {process.env.PUBLIC_URL + '/images/discover1.png'} alt="Discover" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body row">
                            <div className="col-sm-6">
                                <p className="card-text">NAVIDAD</p>
                                <h5 className="card-title">LUCE <br/> ESPECTACULAR</h5>
                                <a href="https://www.mercadolibre.com.mx/" className="btn btn-primary">Ver más</a>
                            </div>
                            <div className="col-sm-6">
                                <img className="card-img-top discover" src= {process.env.PUBLIC_URL + '/images/discover2.png'} alt="Discover" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discover;
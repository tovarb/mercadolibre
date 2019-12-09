import React, { Component } from 'react';
import './Discounts.css';

class Discounts extends Component {


    render(){
        return(
            <div id="generalcontainer">
                <h1>Ofertas <span>Ver todas</span></h1>
                <div>
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src= {process.env.PUBLIC_URL + '/images/product1.webp'} alt="Product1" />
                            <div className="card-body">
                                <small className="text-muted transparent last-price">$546</small>
                                <h5 className="card-title">$367 <span>32% OFF</span></h5>
                                <p className="card-text">12x $30.58 sin interéses</p>
                            <p className="card-text"><small className="text-muted transparent">Juego de bolsas elegante.</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src= {process.env.PUBLIC_URL + '/images/product2.webp'} alt="Product2" />
                            <div className="card-body">
                                <small className="text-muted transparent last-price">$546</small>
                                <h5 className="card-title">$399 <span>20% OFF</span></h5>
                                <p className="card-text">12x $26.60 sin interéses</p>
                            <p className="card-text"><small className="text-muted transparent">Archy Reloj Inteligente.</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src= {process.env.PUBLIC_URL + '/images/product3.webp'} alt="Product3" />
                            <div className="card-body">
                                <small className="text-muted transparent last-price">$20</small>
                                <h5 className="card-title">$19 <span>5% OFF</span></h5>
                                <p className="card-text">12x $16.25 sin interéses</p>
                            <p className="card-text"><small className="text-muted transparent">Juego Ctr Crash Team Racing Ps1 Playstation.</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src= {process.env.PUBLIC_URL + '/images/product4.webp'} alt="Product4" />
                            <div className="card-body">
                                <small className="text-muted transparent last-price">$999</small>
                                <h5 className="card-title">$529 <span>31% OFF</span></h5>
                                <p className="card-text">12x $44.08 sin interéses</p>
                            <p className="card-text"><small className="text-muted transparent">Paquete Nautica Blue + Nautica Classic Caballero.</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src= {process.env.PUBLIC_URL + '/images/product5.webp'} alt="Product5" />
                            <div className="card-body">
                                <small className="text-muted transparent last-price">$369</small>
                                <h5 className="card-title">$332 <span>10% OFF</span></h5>
                                <p className="card-text">12x $32.8</p>
                            <p className="card-text"><small className="text-muted transparent">Tenis Escolar Bubble Gummers Geologia.</small></p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        );
    }

}

export default Discounts;
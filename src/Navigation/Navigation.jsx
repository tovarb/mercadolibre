import React, { Component } from 'react';
import './Navigation.css';

import logo from '../MercadoLibre_logo.png';
import promo from '../disc-v.png';
import location from '../location.png';
import shoppingCart from '../shopping-cart.png';

class Navigation extends Component {
    /*
    constructor(props){
        super(props);
    }*/


    render() {
        return(
            <div id="navContainer">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="https://www.mercadolibre.com.mx/"><img id="logo" src={logo} alt="logo-mercadopago" /></a>
                        <div className="input-group mb-1 m-auto">
                            <input type="text" className="form-control input-lg ml-5" placeholder="Buscar productos, marcas y más..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-light" type="button"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                        <div className="input-group m-0 p-0">
                            <img id="promo" src={promo} alt="logo-mercadopago" />
                        </div>
                    </div>
                </nav>
                <div className="navbar navbar-expand-lg navbar-light mb-0">
                    <img  src={location} alt="location-icon" />
                    <a className=" collapse navbar-collapse navbar-brand postal-c" href="https://www.mercadolibre.com.mx/">
                        <span>Ingresa tu <br/> código postal</span> 
                    </a>
                    <div className="collapse navbar-collapse input-group" id="navbarText">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.mercadolibre.com.mx/">Categorías</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.mercadolibre.com.mx/">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.mercadolibre.com.mx/">Historial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.mercadolibre.com.mx/">Vender</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.mercadolibre.com.mx/">Ayuda</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse input-group" id="navbarText">
                        <ul className="navbar-nav ml-5">
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.mercadolibre.com.mx/">Crear tu cuenta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.mercadolibre.com.mx/">Ingresa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.mercadolibre.com.mx/">Mis compras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.mercadolibre.com.mx/"><img src={shoppingCart} alt="shoppping-cart" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
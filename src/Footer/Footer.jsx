import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render(){
        return(
            <div id="generalContainer-Footer">
                <div className="main-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1 col-sm-0">
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <h4>Acerca de</h4>
                                <ul className="list-unstyled">
                                    <li>Mercado Libre</li>
                                    <li>Investor relations</li>
                                    <li>Tendencias</li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <h4>Otros sitios </h4>
                                <ul className="list-unstyled">
                                    <li>Developers</li>
                                    <li>Mercado Pago</li>
                                    <li>Mercado Shops</li>
                                    <li>Mercado Envíos</li>
                                    <li>Mercado Libre Publicidad</li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <h4>Ayuda</h4>
                                <ul className="list-unstyled">
                                    <li>Comprar</li>
                                    <li>Vender</li>
                                    <li>Resolución de problemas</li>
                                    <li>Centro de seguridad</li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <h4>Redes sociales</h4>
                                <ul className="list-unstyled">
                                    <li>Twitter</li>
                                    <li>Facebook</li>
                                    <li>YouTube</li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <h4>Mi cuenta</h4>
                                <ul className="list-unstyled">
                                    <li>Ingresa</li>
                                    <li>Vender</li>
                                </ul>
                            </div>
                            <div className="col-md-1 col-sm-0">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom row">
                    <div className="col-md-6 col-sm-12 last-info">
                        <ul>
                            <li>Trabaja con nosotros</li>
                            <li>Términos y condiciones</li>
                            <li>Políticas de privacidad</li>
                            <li>Ayuda</li>
                        </ul>
                        <p className="text-xs-center copyright">
                            Copyright © 1999-2019 DeRemate.com de México S. de R.L. de C.V.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 last-info">
                    <img className="card-img-top adv" src= {process.env.PUBLIC_URL + '/images/app-adv.png'} alt="App Adv" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
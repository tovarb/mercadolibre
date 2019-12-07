import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
        /*
    constructor(props){
        super(props);
    }*/

    render(){
        return(
            <div id="generalContainer">
                <section>
                    <div id="carousel">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/mainImg.png'} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/car2.png'} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/car3.png'} alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev transparent" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next transparent" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card-group">
                        <div className="card main-marg">
                            <div className="card-body">
                                <p className="card-title">Paga cómodo y seguro</p>
                                <p className="card-text text-muted smallLetter">con Mercado Pago</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body marg-left">
                                <p className="card-title">Hasta 12 meses sin intereses con: 
                                <br /> 
                                <span className="btn btn-link smallLetter">
                                    Ver condiciones
                                </span>
                                <br />
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text smallLetter">
                                <img src= {process.env.PUBLIC_URL + '/images/ML-invex.png'} alt="card"/>
                                    Mercado Libre <br/> <span className="ml-5">INVEX</span>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body marg-left">
                                <p className="card-title">Más medios de pago 
                                <br /> 
                                <span className="btn btn-link smallLetter">
                                    Ver todos
                                </span>
                                <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;
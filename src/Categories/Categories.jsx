import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {

    render(){
        return(
            <div id="generalContainer-categories">
                <h1>Categorías populares</h1>
                <div>
                <div className="card-group group-one">
                    <div className="card categories">
                        <div className="card-body">
                            <i className="fas fa-car icon-c"></i>
                            <p className="card-text description">Autos, Motos y Otros</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i className="fas fa-shopping-basket icon-c"></i>
                            <p className="card-text description">Supermercado</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i className="fas fa-tshirt icon-c"></i>
                            <p className="card-text description">Ropa, Bolsas y Calzado</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i className="far fa-futbol icon-c"></i>
                            <p className="card-text description">Deportes y Fitness</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i className="fas fa-desktop icon-c"></i>
                            <p className="card-text description">Computación</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i className="fas fa-gamepad icon-c"></i>
                            <p className="card-text description">Consolas y Videojuegos</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i className="far fa-building icon-c"></i>
                            <p className="card-text description">Inmuebles</p>
                        </div>
                    </div>
                </div>
                <div className="card-group group-two">
                    <div className="card categories">
                        <div className="card-body">
                            <i class="fas fa-mobile-alt icon-c"></i>
                            <p className="card-text description">Celulares y Telefonía</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i class="fas fa-microphone-alt icon-c"></i>
                            <p className="card-text description">Electrónica, Audio y Video</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i class="fas fa-couch icon-c"></i>
                            <p className="card-text description">Hogar, Muebles y Jardín</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i class="fas fa-puzzle-piece icon-c"></i>
                            <p className="card-text description">Juegos y Juguetes</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i class="fas fa-camera icon-c"></i>
                            <p className="card-text description">Cámaras y Accesorios</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i class="far fa-gem icon-c"></i>
                            <p className="card-text description">Joyas y Relojes</p>
                        </div>
                    </div>
                    <div className="card categories">
                        <div className="card-body">
                            <i class="fas fa-book-open icon-c"></i>
                            <p className="card-text description">Libros, Revistas y Comics</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Categories;
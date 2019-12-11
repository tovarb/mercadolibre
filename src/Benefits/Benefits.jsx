import React, { Component } from 'react';
import './Benefits.css';

class Benefits extends Component {

    render() {
        return(
            <div>
                <div id="generalContainer-Benefits">
                    <div className="card-group">
                        <div className="card card-containerB">
                        <img className="card-img-top benefits-img" src= {process.env.PUBLIC_URL + '/images/payment.svg'} alt="Payment" />
                            <div className="card-body">
                            <h1 className="card-title title-bc">Paga con tarjeta o en efectivo</h1>
                            <p className="card-text text-b">Con Mercado Pago, tienes meses sin intereses con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!.</p>
                            <p className="card-text"><small className="text-f">Cómo pagar con Mercado Pago</small></p>
                            </div>
                        </div>
                        <div className="card card-containerB">
                        <img className="card-img-top benefits-img" src= {process.env.PUBLIC_URL + '/images/shipping.svg'} alt="Shipping" />
                            <div className="card-body">
                            <h1 className="card-title title-bc">Envío gratis desde $ 499</h1>
                            <p className="card-text text-b">Con solo estar registrado en Mercado Libre, tienes envíos gratis en millones de productos seleccionados.</p>
                            <p className="card-text"><small className="text-f">Conoce más sobre este beneficio</small></p>
                            </div>
                        </div>
                        <div className="card card-containerB">
                        <img className="card-img-top benefits-img" src= {process.env.PUBLIC_URL + '/images/protected.svg'} alt="Protected" />
                            <div className="card-body">
                            <h1 className="card-title title-bc">Seguridad, de principio a fin</h1>
                            <p className="card-text text-b">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                            <p className="card-text"><small className="text-f">Cómo te protegemos</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Benefits;
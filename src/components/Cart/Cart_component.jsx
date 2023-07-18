import React from 'react'

export const Cart_component = ({ item }) => {

    return (

        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img src={item.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '200px' }} />
                        </div>
                        <div className="ms-3">
                            <h5>{item.title}</h5>
                            <p className="small mb-0">{item.description}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: '50px' }}>
                            <h5 className="fw-normal mb-0">2</h5>
                        </div>
                        <div style={{ width: '80px' }}>
                            <h5 className="mb-0">$2.99</h5>
                        </div>
                        <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import '../Styles/under_construction.css'; 

const UnderConstruction = () => {
    return (
        <div>
            <div className='container my-5 py-3 justify-content-center align-items-center'>
                <div className='row d-flex flex-md-row flex-column my-3'>
                    <div className='col-12 col-md-6'>
                        <div className='container my-3'>
                            <img className='my-5 construction-icon' src='https://botanguzel.com/images/favicon.ico' alt='logo'/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h1 className='my-5'>Webbplatsen Är För Närvarande Under Konstruktion.</h1>
                        <p>Jag kommer snart med en ny upplevelse! Om du vill, kan du kolla in min andra sida:
                            <a href='https://onesolution.botanguzel.com' target='_blank' rel='noopener noreferrer'>
                                <br></br>onesolution.botanguzel.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnderConstruction;

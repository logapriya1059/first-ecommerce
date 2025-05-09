import React from 'react'
import "./Offer.css"
import OfferImage from "/Assets/offer.avif"

const Offer = () => {
  return (
    <div className='Offer'>
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-sm-12 col-md-12 col-lg-8">
                    <div className="display-3 mt-5">EXCLUSIVE</div>
                    <div className="display-3 mt-2">OFFERS FOR YOU</div>
                    <div className="h6 mt-1">ONLY ON BEST SELLERS PRODUCTS</div>
                    <div className="h2 mt-5">Drape Yourself in Royalty</div>
                    <div className="lead mt-3">From vibrant hues to delicate details, dress to celebrate every moment with grace.</div>
                    <button className='btn btn-success mt-5 mb-5'>Check Now</button>

                </div>
                <div className="sideImage col-sm-12 col-md-12 col-lg-4 mt-sm-5 text-center">
                    <img src={OfferImage} alt="Image" />



                </div>

            </div>

        </div>
    </div>
  )
}

export default Offer
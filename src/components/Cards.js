import React, { useState } from 'react';
import Cardsdata from './CardData';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/Action';

export default function Cards() {
  const [cardData, setCardData] = useState(Cardsdata)

  const dispatch = useDispatch();
  const addCart = (e)=>{
    // console.log(e);
    dispatch(ADD(e))
  }
  return (
    <>
      <div className="container">
        <h2 className='text-center mt-3'>Add To Cart Food Items</h2>
        <div className="row d-flex justify-content-center align-item-center">

          {cardData.map((data, id) => {
            return (
              <>
                <div className="card mx-3 mt-4 shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "18rem", border:"none"}}>
                  <img className="card-img-top img-fluid" src={data.imgdata} alt="foods" style={{height:200, width:"100%", cursor:"pointer"}} />
                  <div className="card-body">
                    <h5 className="card-title">{data.rname}</h5>
                    <p className="card-text">
                      Price : ₹ {data.price}
                    </p>
                    <div className='justify-content-center d-flex'>
                     <button className="btn btn-primary col-lg-12"
                     onClick={()=>addCart(data)}
                     >Add To Cart</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })
          }
        </div>
      </div>
    </>
  )
}

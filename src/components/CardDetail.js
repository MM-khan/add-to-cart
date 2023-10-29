import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { REMOVE, ADD, REM_ONE } from '../redux/actions/Action';

export default function CardDetail() {

    const dispatch = useDispatch();
    const replace = useNavigate();
    const [data,setData] = useState([])
    // console.log(data);

    const {id} = useParams();
    const getData = useSelector((state) => state.cartReducer.carts)
    // console.log(getData);
    const compare=()=>{
        let compareData = getData.filter((e)=>{
            return e.id == id
        });
        // console.log(compareData);
        setData(compareData)
    }
    // add some one

    const addCart = (e)=>{
        // console.log(e);
        dispatch(ADD(e))
    }
    const deleteitem = (id)=>{
        dispatch(REMOVE(id));
        replace("/")
    }
    const removeOne = (item)=>{
        dispatch(REM_ONE(item))
    }

    useEffect(()=>{
        compare();
    },[id]);
  return (
    <>
        <div className="container">
            <h2 className='text-center mt-3'>Add To Cart Details</h2>
            <section className='container mt-3'>
                <div className='d-flex'>
                    {
                         data.map((elem)=>{
                        return (
                            <>
                                <div className="img">
                                    <img src={elem.imgdata} alt="" style={{height:250, width:"250", cursor:"pointer"}}  />
                                </div>
                                <div className="detail mx-3 mt-3">
                                    <table>
                                        <tr>
                                            <td>
                                                <p><strong>Returent</strong>: {elem.rname}</p>
                                                <p><strong>Price</strong>: ₹ {elem.price}</p>
                                                <p><strong>Dishes</strong>: {elem.address}</p>
                                                <p><strong>Total</strong>: ₹ {elem.price* elem.qnty}/-</p>
                                                <div className="mt-3 d-flex justify-content-between align-items-center rounded bg-dark text-light p-2" style={{cursor:"pointer"}}>
                                                    <span className='fs-3'onClick={elem.qnty <=1 ? ()=>deleteitem(elem.id):()=>removeOne(elem)}>-</span>
                                                    <span>{elem.qnty}</span>
                                                    <span onClick={()=>addCart(elem)}>+</span>
                                                </div>
                                            </td>
                                            <td>
                                                <p><strong>Rating</strong>: <span>{elem.rating} ★</span></p>
                                                <p><strong>Order Review</strong>: {elem.somedata}</p>
                                                <p><strong>Remove</strong>: <img src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" 
                                                alt="delete" onClick={()=>deleteitem(elem.id)} style={{width:45,height:45}}/></p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </div>
    </>
  )
}

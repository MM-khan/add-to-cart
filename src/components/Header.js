import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import {REMOVE} from "../redux/actions/Action"


export default function Header() {

  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartReducer.carts)
  // console.log(getData);
  const [price,setPrice]= useState(0);
  // console.log(price);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteElem = (id)=>{
    dispatch(REMOVE(id))
  }
  const total = ()=>{
    let price = 0
    getData.map((data,key)=>{
         price =data.price + price
    })
    setPrice(price)
  }

  useEffect(()=>{
    total()

  },[total])
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <Link className="navbar-brand text-light ms-5" to="/">Add To Cart</Link>
        <Link className=" text-light me-auto text-decoration-none" to="/">Home</Link>
        <IconButton aria-label="cart" className="ms-auto me-5">
          <Badge badgeContent={getData.length} color="success"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getData.length ?
              <div  style={{width:"25rem", padding:10}}>
                <table>
                  <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Resturent Name</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      getData.map((e)=>{
                        return(
                          <>
                        <tr>
                          <td>
                            <Link to={`./card/${e.id}`} onClick={handleClick}>
                              <img src={e.imgdata} alt="" style={{widht:100,height:100}} /></Link>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹ {e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p><img src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" alt="delete" style={{width:45,height:45, display:"none"}}/></p>
                          </td>
                          <td>
                            <p><img src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" alt="delete"
                            onClick={()=>deleteElem(e.id)} style={{width:35,height:35}}/></p>
                          </td>
                        </tr>
                        <tr>
                          <td>Total : ₹ {e.price* e.qnty}/-</td>
                        </tr>
                        </>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div> :
              <div>
                <i className='fas fa-close'></i>
                <p>Your Cart Is Empty!</p>
              </div>
          }
        </Menu>
      </nav>
    </>
  )
}

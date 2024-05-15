import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Addp.css';
import axios from "axios";

function Addproduct()
{  
    const navigate = useNavigate();
     
    const[txtname, setName]= useState('');
    const[txtdescription, setdescription]= useState('');
    const[fileimage, setPhoto]= useState('');
    const[message, setMessage]= useState('');
 
    const uploadProduct= async()=>{
        console.log(fileimage)
        const formData= new FormData();
        formData.append('name', txtname);
        formData.append('description',txtdescription);
        formData.append('image', fileimage);
        const responce= await axios.post("http://127.0.0.1:8000/api/products", formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
 
        if(responce)
        {
            console.log(responce)
            setMessage(responce.message); //"message": "Product successfully created."
            setTimeout(()=>{
                navigate('/productlist');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadProduct();
 
   }
    return(
    <React.Fragment>
        <>
        <div className="main">
            <div className="container-fluid px-1 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h3 >Add Product</h3>
                        <p className="text-warning">{ message}</p> 
                        <div className="card">
                            <form className="form-card" onSubmit={handleSubmit}>
                                <div className="row justify-content-center text-left">
                                    <div className="form-group col-sm-8 flex-column d-flex">
                                        <label className="form-control-label px-3">Product Title</label>
                                        <input type="text" className="form-control" onChange={ (e)=>setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row justify-content-center text-left">
                                    <div className="form-group col-sm-8 flex-column d-flex">
                                        <label className="form-control-label px-3">Description</label>
                                        <input type="text" className="form-control" onChange={(e)=>setdescription(e.target.value)}  />
                                    </div>
                                </div>
                                <div className="row justify-content-center text-left">
                                    <div className="form-group col-sm-8 flex-column d-flex">
                                        <label className="form-control-label px-3">Product Image</label>
                                        <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])} />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="form-group col-sm-6">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    </React.Fragment>
    );
}
export default Addproduct;
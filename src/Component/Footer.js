import React, {  } from "react";
import { Link } from 'react-router-dom';

function Footer()
{
    return(
        <React.Fragment>
            
<div className="bg-black ">

  <section className="">
  <footer className="text-center text-white" >
    <div className="container p-4 pb-0">
    
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Go to your list </span>
          <Link to="/productlist">
  <button type="button" className="btn btn-outline-light btn-rounded">
    list
  </button>
</Link>
        </p>
      </section>
      
    </div>
    
    <div class="text-center p-3 ">
      © 2024 Copyright:
      <a class="text-white" href="sajead">sajedaalrababh</a>
    </div>
  
  </footer>
</section>
  
</div>
             
        </React.Fragment>
    );
}
export default Footer;
import React, {useState} from 'react';



function Update(){
    
    let [num, setNum ]= useState(0);
 return(
     <>
<div className="container ">
      <div className="card bg-secondary text-white">
                 
              <div className="p-3"> <h3>A  Hook is created for Number</h3></div>
              <div className="p-2" > <p> A Number is  updated by button</p></div>       
              <h1>{num}</h1>
              <button   onClick={()=>setNum(++num)} type="button"  className="btn btn-success mx-auto w-25 mb-4">Up + date </button>         
              <button   onClick={()=>setNum(--num)} type="button"  className="btn btn-primary mx-auto w-25 mb-4">Up - date</button>
            
       </div>           
  </div>
           
     </>
 )

}
export default Update;






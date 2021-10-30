import React, {useState} from 'react';
function Mypets() {
    const [mybird, setMybird] = useState("My Lovely Bird")
    const [bird, setBird] = useState(" Parrot");
    const [color, setColor] = useState("Beautiful");
    
    
    return (
      <>
      <div className="container ">       
       <div className="card bg-danger text-white">
          <div className="card-body mx-auto d-block p-5">
            <h1>React - Assignment- 3</h1> 
          </div>      
         </div>
      </div>

      
<div className="container ">
      <div className="card bg-secondary text-white">
            <div className="card-body">
              <p><h4>My Assignment:</h4>
                  Make states in  Functional Component using useState hook.
                  make one state for a number, string, array and return display for each.
              </p>
            </div>
       </div>
</div>

<div className="container ">
      <div className="card bg-warning text-black">
            <div className="card-body mx-auto">
            
              <h3>useState Hook For String [Parrot]</h3>
             
            </div>
       </div>
</div>

{/* Parrot */}
 <div className="container">
    <div className="row">
            <div className="col-6">
            
                    <div className="card bg-danger">
                      <div className="card-body">
                        <h2>{mybird}</h2> 
                        <p>My {bird}  color is {color}</p>
                        <img src="/images/bird.jpg" className="img-thumbnail" alt="Parrot" width="210" height="250"/> 
                      </div>
                  </div>
              </div>
      
              <div className="col-6">
                  <div className="card bg-dark">
                      <div className="card-body text-white">
                      <h2>{mybird}</h2> 
                      <p>My {bird}  color is {color}</p>
                      <img src="/images/bird1.jpg" className="img-thumbnail" alt="Parrot" width="304" height="210"/> 
                    </div>
                  </div>
              </div>
        </div>
    </div>

      </>
    )
  }
  export default Mypets;
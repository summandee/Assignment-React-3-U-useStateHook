import React,{useState} from 'react'

const StringDog = () => {

    const [dog, setdog] = useState("WhiteDog");
    const [year, setYear] = useState("4-years");
    const[country, setCountry] = useState('USA')
    return (
        <>
        <div className="container ">
      <div className="card bg-warning text-black">
            <div className="card-body mx-auto">           
              <h3>useState Hook For String [Dog]</h3>            
            </div>
       </div>
</div>


            
      {/* Dog */}
      <div class="container mx-auto d-block ">
        <div class="row">
            <div class="col-12"> 
                    <div class="card bg-success">
                      <div class="card-body">
                        <h2>{dog}</h2> 
                        <p>{dog} is brought from {country} , He is {year} old.</p>
                        <img src="/images/dog1.jpg" className="img-thumbnail" width="200" height="236" />
                      </div>
                    </div>
            </div>
        </div>
    </div>    
 
            
        </>
    )
}

export default StringDog

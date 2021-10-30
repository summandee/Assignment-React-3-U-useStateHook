import React,{useState} from 'react'

const ArraysHook = () => {

    const bioData=[
            {id:0, name:"david", age:23},
            {id:2, name:"Alvina", age:20},
            {id:3, name:"Kamil", age:24}

       ]
       const [MyArray, setMyArray] = useState(bioData)

    const clearArray = () => {
        setMyArray([]);
    }
    return (
      <>         
        <div className="container ">
            <div className="card bg-danger pb-3">
                <h1>Hook With Arrays</h1>
                <p>Set the Hook with Arrays</p>  
                {/* render Data      */}
                    <div className="w-75 bg-dark  mx-auto d-block p-3 text-white-50 rounded mb-4">
                        { MyArray.map((curElm) => { return<h1>Name: {curElm.name}  &  Age : {curElm.age}</h1> 
                        })          
                        }
                    </div>  
                    {/* data */}
                    <button   onClick={clearArray} type="button"  className="btn btn-info w-25 mx-auto">Clear Data</button>

            </div>
        </div>

     </>
  )
}

export default ArraysHook;

import react, {useState} from 'react'
import '../css/bmsdetails.css'

const BMS = () => {

  const [height, setHeight] = useState(0); //the height variable holds the current value of the height while the setHeight function 
                                           // is used to update the value of the variable height 
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('')

let calcBmi  = (event) => {

  event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('pls enter a valid whole number')
    }

    else{
      
          let bmi = (weight/(height*height) * 703)

          setBmi(bmi.toFixed(1))

          if (bmi<18.5){
            setMessage('UNDERWEIGHT')
          }

          else if (bmi>=18.5 && bmi <24.9) {
            setMessage('HEALTHY WEIGHT!')

          }

          else{
            setMessage('OVERWEIGHT')
          }

        
        }
}


let reload = () => {
    window.location.reload()
}


  return (
    <div className='form-container'>
    <form onSubmit={calcBmi}>
       <h3>Enter your details below</h3>

       <div className='MI-container'>
        <div className='metric'>Metric</div>
        <div className='imperial  '> Imperial</div>

       </div>

       <div className='HW-container'>
         <div className='height-div'>
             <label>Height (cm)</label><br/>

             {/* //  setHeight(e.target.value) this is used to update the height to its current value
                e.target.value takes teh current value inputed and update teh current value of the height, overriding the previous 
                data stored 
             */}
              
             <input type='text' placeholder='0' value={height} onChange={(e)  => setHeight(e.target.value)}/>
         </div>
         <div className='weight-div'>
             <label>Weight (kg)</label><br/>
             <input type='text' placeholder='0' value={weight} onChange = {(e) => setWeight(e.target.value)}/>
         </div>


       </div><br/>
       <div className='submit-reload-div'>
         <div className='submit-div'>
             <button type='submit'>Submit</button>
         </div>

         <div className='reload-div'>
         <button type='submit' onClick={reload}>Reload</button>
         </div>
       </div>



       <div className='welcome-div'>
           <h3>Welcome!</h3>
           <p>your bmi is: {bmi}</p>
           <p>{message}</p>

       </div>

     </form>
   </div>
  )
};

export default BMS
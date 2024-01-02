import React from 'react'
import '../css/footer.css'

const FOOTER = () => {
  return (
    <div>
        <div className='main-container'>
        <div className='limitation-gender-div'>
            <div className='limitations'>
                <h2>Limitations of BMI</h2>
                <p>
                  Although BMI is often a preactical indicator of healthy weight, it is not suited for every person. 
                  Specific groups should carfull consider their BMI outcomes, and in certain cases, the measurement 
                  may not be beneficial to use 
                </p>
            </div>

            <div className='gender'>
              <h3>Gender</h3>
              <p>
                The development and body fat composition of girsl and boys vary with age. Consequenly, 
                a child's age and gender are considered wehn evalUtatin their BMI.
              </p>
              
            </div>

        </div>

        <div className='age-muscle-div'> 
            <div className='age'>
                <h3>Age</h3>
                <p>In aging individuals, increased body fat and muscle loss may 
                  cause BMI to underestimate body fat content. </p>
            </div>

            <div className='muscles'> 
                <h3>Muscle</h3>
                <p>BMI may misclassidfy muscular inidviuals as overweight or obese, 
                  as it doesnt differentiate muscle from fat.</p>
  
            </div>

        </div>

        <div className='pregnancy-race-div'>
            <div className='pregnancy'>
                <h3>Pregnancy</h3>
                <p>Expectancy mothers experience weight gain due to theri growing baby. 
                  Maintaining a halthy pre0pregnancy BMI is adivsable to minimize health risks for both monter and child.</p>
            </div>

            <div className='race'>
                <h3>Race</h3>
                <p>Certain health concerns may affect inividuals of some black and asian origins at lowerBMIs than others. 
                  to learn more, it is advised to discuss this with our GP or practise nurse.</p>
              
            </div>

        </div>


        </div>
    </div>
  )
}

export default FOOTER
import react from 'react'
import '../css/section.css'


const SECTION = () => {

    return (
        <div>
            <div className='image-bmi-container'>
                <div className='image-container'>image</div>

                <div className='bmi-result'> 
                    <h2>What your BMI result means</h2>
                    <p> A BMI range of 18.5 to 24.9 is considered a 'healthy weight'. Maintaining a healthy weight may lower your 
                        chances of experiencing health issues later on, such as obesity and type /2 diabtes. Aim for a nutrition diet 
                        with reduced fat and sugar content, incorporating ample friuts and vegetables. Additonally, strive for regular
                         physical activity, ideally about 30 minutess daily for five days a week.

                    </p>
                </div>
            
            </div>

            <div className='healty-regular-adequate-div'>
                <div className='healty-eating'>
                    <h3 >Healthy eating</h3>
                    <p>Healthy eating promotes weight contol, disease prevention, better digestion, immunity, mental claarity
                     and mood</p>
                </div>
                <div className='regular-excercise'>
                    <h3>Regular excercise</h3>
                    <p>Excercise improves fitness, aids weigt control, elevates mood, and reduces disease risk, fostring wellneess and longe</p>
                </div>
                <div className='adequate-sleep'>
                    <h3>Adequate sleep</h3>
                    <p>Sleep enhances mental clarity, emotional stability and physical wellness, promoting overall restoration and rejuvenation</p>
                </div>
            </div>
            
        </div>
    );
    
};

export default SECTION
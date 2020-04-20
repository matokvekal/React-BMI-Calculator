import React, { useState } from 'react';
import BmiCalc from './BmiCalc';

const BMI = () => {
    const [bmiValue, setBmiValue] = useState(0);
    const getBmiClass = bmi => {
        if (bmi >= 1 && bmi <= 18.5) return 'UnderWeight';
        if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight';
        if (bmi >= 24.9 && bmi <= 29.9) return 'OverWeight';
        if (bmi >= 30) return 'Obese';
    }
    const bmiCategory = getBmiClass(bmiValue);
    let bmiClass = '';
    if (bmiValue > 0 && bmiCategory) {
        bmiClass = bmiCategory.split(' ')[0].toLocaleLowerCase()
    }
const BmiBackColor =bmi=>{
    if (bmi >= 1 && bmi <= 18.5) return '#FED88B';
    if (bmi >= 18.5 && bmi <= 24.9) return '#80ff80';
    if (bmi >= 24.9 && bmi <= 29.9) return '#FF7F50';
    if (bmi >= 30 ) return '#FF5411';

}
    return (
        <>
            <div className='calculator'
            style={{backgroundColor:BmiBackColor(bmiValue)}}
            >
                <h3>Body Mass Calc</h3>
                <div className='bmi-result-container'>
                    <div className='bmi-resulte'>
                        <div className='bmi-result-number'>
                            BMI={bmiValue}
                        </div>
                        <div className={`bmi-category ${bmiClass}`}>
                            {bmiCategory}
                        </div>
                    </div>
                </div>
                <BmiCalc getBmiValue={setBmiValue} />
            </div>
        </>
    )
}

export default BMI

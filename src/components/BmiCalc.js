import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import Forminput from './Forminput';

const BmiCalc = (props) => {
    const {getBmiValue}=props;

    const [HeightUnit, setHeightUnit] = useState('cm');
    const [WeightUnit, setWeightUnit] = useState('kg');
    const [unit, setUnit] = useState('metric');
    const [counts, setCount] = useState({
        heightCount: '0',
        inchesCount: '0',
        weightCount: '0'

    })
    const { heightCount, inchesCount, weightCount } = counts;

    useEffect(() => {
        metricBMI(heightCount,weightCount);
        //eslint-disable-next-line
    }, [heightCount,weightCount])

    const onChangeInput = e => {
        const { name, value } = e.target;//distracture the data from target and insert intoconst obj
        setCount(prevState => ({ ...prevState, [name]: value }));
    }
    const onSelectTag = e => {
        setUnit(e.target.value);
        if (e.target.value === 'metric') {
            setHeightUnit('cm');
            setWeightUnit('kg');
        }
        else {
            setHeightUnit('ft');
            setWeightUnit('lbs');
        }
    }
    const metricBMI = (heigth, weight) => {
        if (heigth > 0 && weight > 0) {
           const heightToMeter =heigth/100;
            const bmi = weight / Math.pow(heightToMeter, 2);
            // console.log(bmi);
             getBmiValue(Math.round(bmi))
        }
    }
    const resetData = e => {
        e.preventDefault();
        getBmiValue(0);
        setUnit('Metric');
        setCount({
            heightCount: '0',
            inchesCount: '0',
            weightCount: '0'
        });
        setHeightUnit('cm');
        setWeightUnit('kg');
    }
    return (
        <>
            <div className='bmi-inputs'>
                <div className='inputs-fields'>
                    <div>
                        <span className='label-unit'>Unit</span>
                        <div className='unit'>
                            <select name='unit' value={unit} onChange={onSelectTag} className='form-control form-control-sm'>
                                <option value='metric'>metric</option>
                                <option value='imperial'>imperial</option>
                            </select>
                        </div>
                    </div>
                    <Forminput
                        type='text'
                        name='heightCount'
                        title={`Height (${HeightUnit})`}
                        value={heightCount}
                        onChange={onChangeInput} />
                    {
                        unit === 'imperial' ?
                            <Forminput
                                type='text'
                                name='inchesCount'
                                title={' (in)'}
                                value={inchesCount}
                                onChange={onChangeInput}
                            /> : ''
                    }             }
                    <Forminput
                        type='text'
                        name='weightCount'
                        title={`Weight (${WeightUnit})`}
                        value={weightCount}
                        onChange={onChangeInput}
                    />
                </div>


                <button className='reset btn btn-primary' type='submit' onClick={resetData}>
                    reset
                </button>

            </div>
        </>
    )
}
BmiCalc.propTypes={
    getBmiValue: PropTypes.func.isRequired
}

export default BmiCalc

import { usStates } from '../../../staticData/states'
import { neighborhoods } from '../../../staticData/neighborhoods'
import rentalCalculatorStyles from './../rentalCalculator.module.css'
import useWindowSize from '../../utils'

export default function PropertyInfoSection({ state, setState }) {
    const [width, height] = useWindowSize();
    const breakpoint = 1150;

    function handleChange(e) {
        setState(prevState => ({
            ...prevState,
            propertyInfo: {
                ...prevState.propertyInfo,
                [e.target.name]: [e.target.value]
            }
        }))
    }

    return (
        <div className={rentalCalculatorStyles.calculatorSection + ' ' + rentalCalculatorStyles.calculatorSectionLeft}>
            <h2 className={rentalCalculatorStyles.header}>Property Information</h2>
            <div>
                {/*Row 1*/}
                <div className={rentalCalculatorStyles.row}>
                    <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                        <div className={rentalCalculatorStyles.inputLabel}>
                            <label className={rentalCalculatorStyles.label} htmlFor='address'>Address</label>
                            <input className={rentalCalculatorStyles.input} type='text' name='address' placeholder='Enter Text'
                                onChange={handleChange} />
                        </div>
                    </div>
                    {width >= breakpoint ?
                        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <label className={rentalCalculatorStyles.label} htmlFor='city'>City</label>
                                <input className={rentalCalculatorStyles.input} type='text' name='city' placeholder='Enter Text'
                                    onChange={handleChange} />
                            </div>
                        </div> : null
                    }
                </div>
                {/*Row 2*/}
                <div className={rentalCalculatorStyles.row}>
                    {/*<div className={rentalCalculatorStyles.inputContainer}>*/}
                        {/*<div className={rentalCalculatorStyles.inputLabel}>*/}
                        {/*    <label className={rentalCalculatorStyles.label} htmlFor='neighborhood'>Neighborhood</label>*/}
                        {/*    <select className={rentalCalculatorStyles.input} name='neighborhood' onChange={handleChange}>*/}
                        {/*        <option value='none' selected disabled hidden>Choose Option</option>*/}
                        {/*        {neighborhoods.map(neighborhoodItem => {*/}
                        {/*            return (*/}
                        {/*                <option value={neighborhoodItem.name} key={neighborhoodItem.name}>{neighborhoodItem.name}</option>*/}
                        {/*            )*/}
                        {/*        })}*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {width >= breakpoint ? null :
                        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <label className={rentalCalculatorStyles.label} htmlFor='city'>City</label>
                                <input className={rentalCalculatorStyles.input} type='text' name='city' placeholder='Enter Text'
                                    onChange={handleChange} />
                            </div>
                        </div>
                    }
                    <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                        <div className={rentalCalculatorStyles.inputLabel} >
                            <label className={rentalCalculatorStyles.label} htmlFor='state'>State</label>
                            <select className={rentalCalculatorStyles.input} name='state' onChange={handleChange} >
                                <option value='none' selected disabled hidden>Choose</option>
                                {usStates.map(stateItem => {
                                    return (
                                        <option value={stateItem.name} key={stateItem.name}>{stateItem.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    {width >= breakpoint ? 
                        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                            <div className={rentalCalculatorStyles.inputLabel}>
                                <label className={rentalCalculatorStyles.label} htmlFor='zipCode'>Zip Code</label>
                                <input className={rentalCalculatorStyles.input} type='text' name='zipCode' placeholder='Enter Text'
                                    onChange={handleChange} />
                            </div>
                        </div> : null
                    }
                    {width >= breakpoint ?
                        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <label className={rentalCalculatorStyles.label} htmlFor='squareFootage'>Square Footage</label>
                                <input className={rentalCalculatorStyles.input} type='number' name='squareFootage'
                                    placeholder='Enter Number' onChange={handleChange} />
                            </div>
                        </div> : null
                    }
                </div>
                {width >= breakpoint ? null :
                    //Row 3
                    <div className={rentalCalculatorStyles.row}>
                        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                            <div className={rentalCalculatorStyles.inputLabel}>
                                <label className={rentalCalculatorStyles.label} htmlFor='zipCode'>Zip Code</label>
                                <input className={rentalCalculatorStyles.input} type='text' name='zipCode' placeholder='Enter Text'
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <label className={rentalCalculatorStyles.label} htmlFor='squareFootage'>Square Footage</label>
                                <input className={rentalCalculatorStyles.input} type='number' name='squareFootage'
                                    placeholder='Enter Number' onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
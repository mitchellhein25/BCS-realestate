import AddressField from './propertyInfoSectionFields/addressField'
import CityField from './propertyInfoSectionFields/cityField'
import StateField from './propertyInfoSectionFields/stateField'
import ZipCodeField from './propertyInfoSectionFields/zipCodeField'
import SquareFootageField from './propertyInfoSectionFields/squareFootageField'
import NeighborhoodField from './propertyInfoSectionFields/neighborhoodField'
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
                    <AddressField
                        handleChange={handleChange}
                    />
                    {width >= breakpoint ?
                        <CityField
                            handleChange={handleChange}
                        /> : null
                    }
                </div>
                {/*Row 2*/}
                <div className={rentalCalculatorStyles.row}>
                    {/*<NeighborhoodField*/}
                    {/*    handleChange={handleChange}*/}
                    {/*/>*/}
                    {width >= breakpoint ? null :
                        <CityField
                            handleChange={handleChange}
                        />
                    }
                    <StateField
                        handleChange={handleChange}
                    />
                    {width >= breakpoint ? 
                        <ZipCodeField
                            handleChange={handleChange}
                        /> : null
                    }
                    {width >= breakpoint ?
                        <SquareFootageField
                            handleChange={handleChange}
                        /> : null
                    }
                </div>
                {width >= breakpoint ? null :
                    //Row 3
                    <div className={rentalCalculatorStyles.row}>
                        <ZipCodeField
                            handleChange={handleChange}
                        />
                        <SquareFootageField
                            handleChange={handleChange}
                        />
                    </div>
                }
            </div>
        </div>
    )
}
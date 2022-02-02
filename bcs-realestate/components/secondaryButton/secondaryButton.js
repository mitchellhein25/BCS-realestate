import secondaryButtonStyles from './secondaryButton.module.css'

export default function SecondaryButton({ buttonText, buttonAltText, buttonImage }) {


    return (
        <button className={secondaryButtonStyles.primaryButton}>
            <p className={secondaryButtonStyles.buttonText}> {buttonText}</p>
            {buttonImage ?
                <div className={secondaryButtonStyles.buttonImage}>
                    <Image
                        src={buttonImage}
                        alt={buttonAltText}
                        width={20}
                        height={20}
                    />
                </div> : null
            }
        </button>
    )
}
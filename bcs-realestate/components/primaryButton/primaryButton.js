import Link from 'next/link'
import Image from 'next/image'
import primaryButtonStyles from './primaryButton.module.css'

export default function PrimaryButton({ buttonText, buttonImagePath, path, buttonAltText }) {
    return (
        <Link href={path} passHref>
            <button className={primaryButtonStyles.primaryButton}>
                <p className={primaryButtonStyles.buttonText}> { buttonText }</p>
                {buttonImagePath ?
                    <div className={primaryButtonStyles.buttonImage}>
                        <Image
                            src={buttonImagePath}
                            alt={buttonAltText}
                            width={60}
                            height={60}
                        />
                    </div> : null
                }
            </button>
        </Link>
        );
}
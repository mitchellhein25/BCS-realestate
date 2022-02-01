import React from 'react'
import Image from 'next/Image'
import modalStyles from './modal.module.css'

export default function modal({ children, setOpen }) {

    return (
        <div className={modalStyles.modal}>
            <div className={modalStyles.innerModal}>
                <div className={modalStyles.floatRight}>
                    <Image
                        src="/icons/exit.svg"
                        alt="Exit navigation menu button"
                        width={30}
                        height={30}
                        onClick={() => setOpen(false)}
                    />
                </div>
                {children}
            </div>
        </div>
    )
}
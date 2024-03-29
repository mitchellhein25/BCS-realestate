import React from 'react'
import Image from 'next/image'
import modalStyles from './modal.module.css'

export default function modal({ children, state, setState }) {

    return (
        <div className={modalStyles.modal}>
            <div className={modalStyles.innerModal}>
                <div className={modalStyles.floatRight}>
                    <Image
                        src="/icons/exit.svg"
                        alt="Exit navigation menu button"
                        width={30}
                        height={30}
                        onClick={() => setState({...state, open: false})}
                    />
                </div>
                {children}
            </div>
        </div>
    )
}
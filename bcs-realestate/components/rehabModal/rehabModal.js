import React from 'react'
import rehabModalStyles from './rehabModal.module.css'

export default function RehabModal({ }) {

    return (
        <div className={rehabModalStyles.modal}>
            <div className={rehabModalStyles.innerModal}>
                <p>test modal</p>
            </div>
        </div>
    )
}
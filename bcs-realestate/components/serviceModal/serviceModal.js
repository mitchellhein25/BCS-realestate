import React from 'react'
import Image from 'next/Image'
import serviceModalStyles from './serviceModal.module.css'
import ServiceDetailedListView from '../serviceDetailedListView/serviceDetailedListView'

export default function ServiceModal({ setOpen }) {

    return (
        <div className={serviceModalStyles.modal}>
            <div className={serviceModalStyles.innerModal}>
                <div className={serviceModalStyles.floatRight}>
                    <Image
                        src="/icons/exit.svg"
                        alt="Exit navigation menu button"
                        width={30}
                        height={30}
                        onClick={() => setOpen(false)}
                    />
                </div>
                <ServiceDetailedListView></ServiceDetailedListView>
            </div>
        </div>
    )
}
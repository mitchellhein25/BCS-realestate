import React from 'react'
import Image from 'next/Image'
import rehabModalStyles from './rehabModal.module.css'
import RehabDetailedListView from '../rehabDetailedListView/rehabDetailedListView'

export default function RehabModal({ setOpen }) {

    return (
        <div className={rehabModalStyles.modal}>
            <div className={rehabModalStyles.innerModal}>
                <div className={rehabModalStyles.floatRight}>
                    <Image
                        src="/icons/exit.svg"
                        alt="Exit navigation menu button"
                        width={30}
                        height={30}
                        onClick={() => setOpen(false)}
                    />
                </div>
                <RehabDetailedListView></RehabDetailedListView>
            </div>
        </div>
    )
}
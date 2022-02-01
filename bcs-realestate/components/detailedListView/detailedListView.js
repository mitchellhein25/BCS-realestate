import React from 'react'
import Image from 'next/image'
import detailedListViewStyles from './detailedListView.module.css'

export default function DetailedListView({ itemList }) {
    return (
        <div className={detailedListViewStyles.container}>
            {itemList.map((li, idx) => (
                <button key={idx} className={detailedListViewStyles.listItem}>
                    <div className={detailedListViewStyles.detailContainer}>
                        <h3>{li.name}</h3>
                        <p>{li.description}</p>
                        <h4>Price: {li.price}</h4>
                    </div>
                    <div className={detailedListViewStyles.imageContainer}>
                        <Image
                            src={li.photo}
                            alt={li.description}
                            width={150}
                            height={150}
                            className={detailedListViewStyles.imageRounded}
                        />
                    </div>
                </button>
            ))}
        </div>
    )
}
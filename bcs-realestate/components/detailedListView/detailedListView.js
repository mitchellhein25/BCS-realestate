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
                        {li.details.phone ?
                            <p className={detailedListViewStyles.detailItem}>
                                <b>Phone</b>: {li.details.phone}</p>
                            : null
                        }
                        {li.details.website ?
                            <p className={detailedListViewStyles.detailItem}>
                                <b>Website</b>: {li.details.website}</p>
                            : null
                        }
                        {li.details.address ?
                            <p className={detailedListViewStyles.detailItem}>
                                <b>Address</b>: {li.details.address}</p>
                            : null
                        }
                    </div>
                    {li.photo ?
                        <div className={detailedListViewStyles.imageContainer}>
                            <Image
                                src={li.photo}
                                alt={li.photoDesc + " logo"}
                                width={150}
                                height={150}
                                className={detailedListViewStyles.imageRounded}
                            />
                        </div> : null
                    }
                </button>
            ))}
        </div>
    )
}
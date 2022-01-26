import React from 'react'
import Image from 'next/image'
import rehabDetailedListViewStyles from './rehabDetailedListView.module.css'

export default function RehabDetailedListView() {

    const itemList = [
        { name: "Item 1 Name", photo: "/images/gregHeadshot.jpg", price: "Item 1 Price", description: "Item 1 Description" },
        { name: "Item 2 Name", photo: "/images/gregHeadshot.jpg", price: "Item 2 Price", description: "Item 2 Description" },
        { name: "Item 2 Name", photo: "/images/gregHeadshot.jpg", price: "Item 2 Price", description: "Item 2 Description" },
        { name: "Item 2 Name", photo: "/images/gregHeadshot.jpg", price: "Item 2 Price", description: "Item 2 Description" }
    ]

    return (
        <div className={rehabDetailedListViewStyles.container}>
            {itemList.map((li, idx) => (
                <button key={idx} className={rehabDetailedListViewStyles.listItem}>
                    <div className={rehabDetailedListViewStyles.detailContainer}>
                        <h3>{li.name}</h3>
                        <p>{li.description}</p>
                        <h4>Price: {li.price}</h4>
                    </div>
                    <div className={rehabDetailedListViewStyles.imageContainer}>
                        <Image
                            src={li.photo}
                            alt={li.description}
                            width={150}
                            height={150}
                            className={rehabDetailedListViewStyles.imageRounded}
                        />
                    </div>
                </button>
            ))}
        </div>
    )
}
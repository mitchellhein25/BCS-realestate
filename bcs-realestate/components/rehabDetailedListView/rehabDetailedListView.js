import React from 'react'
import rehabDetailedListViewStyles from './rehabDetailedListView.module.css'

export default function RehabDetailedListView() {

    const itemList = [
        { name: "Item 1 Name", photo: "Item 1 Photo", price: "Item 1 Price", description: "Item 1 Description" },
        { name: "Item 2 Name", photo: "Item 2 Photo", price: "Item 2 Price", description: "Item 2 Description" }
    ]

    return (
        <div className={rehabDetailedListViewStyles.container}>
            {itemList.map((li, idx) => (
                <button key={idx} className={rehabDetailedListViewStyles.listItem} onClick={() => setOpen(true)}>
                    <p>{li.name}</p>
                </button>
            ))}
        </div>
    )
}
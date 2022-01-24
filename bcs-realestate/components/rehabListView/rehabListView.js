import React, { useState } from 'react'
import rehabListViewStyles from './rehabListView.module.css'
import RehabModal from '../rehabModal/rehabModal'

export default function RehabListView() {
    const [open, setOpen] = useState(false);

    const itemList = [
        { name: "Flooring" },
        { name: "Lighting" }
    ]

    return (
        <div className={rehabListViewStyles.container}>
            {itemList.map((li, idx) => (
                <div key={idx} className={rehabListViewStyles.listItem} onClick={() => setOpen(true)}>
                    <p>{li.name}</p>
                </div>
            ))}
            {open ? <RehabModal></RehabModal> : null}
        </div>
        )
}
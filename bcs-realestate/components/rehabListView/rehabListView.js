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
                <button key={idx} className={rehabListViewStyles.listItem} onClick={() => setOpen(true)}>
                    {/*<button>*/}
                        <p>{li.name}</p>
                    {/*</button>*/}
                </button>
            ))}
            {open ? <RehabModal setOpen={setOpen}></RehabModal> : null}
        </div>
        )
}
import React, { useState } from 'react'
import RehabModal from '../rehabModal/rehabModal'
import rehabListViewStyles from './rehabListView.module.css'

export default function RehabListView({ title, itemList, modal }) {
    const [open, setOpen] = useState(false);

    return (
            <div className={rehabListViewStyles.columnContainer}>
            <h2 className={rehabListViewStyles.header2}>{title}</h2>
                {itemList.map((li, idx) => (
                    <button key={idx}
                        className={`${rehabListViewStyles.listItem} ${idx % 2 != 0 ? rehabListViewStyles.lightRed : rehabListViewStyles.white}`}
                        onClick={() => setOpen  (true)}>
                        <p>{li.name}</p>
                    </button>
                ))}
            {modal == "Rehab" ?
                (open ? <RehabModal setOpen={setOpen}></RehabModal> : null) :
                (open ? <RehabModal setOpen={setOpen}></RehabModal> : null)}
            </div>
        )
}
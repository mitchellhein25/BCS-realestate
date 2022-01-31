import React, { useState } from 'react'
import RehabModal from '../rehabModal/rehabModal'
import listViewStyles from './listView.module.css'

export default function ListView({ title, itemList, modal }) {
    const [open, setOpen] = useState(false);

    return (
            <div className={listViewStyles.columnContainer}>
            <h2 className={listViewStyles.header2}>{title}</h2>
                {itemList.map((li, idx) => (
                    <button key={idx}
                        className={`${listViewStyles.listItem} ${idx % 2 != 0 ? listViewStyles.lightRed : listViewStyles.white}`}
                        onClick={() => setOpen  (true)}>
                        <p>{li.name}</p>
                    </button>
                ))}
            {modal == "Rehab" ?
                (open ? <RehabModal setOpen={setOpen}></RehabModal> : null)
                :
                (open ? <RehabModal setOpen={setOpen}></RehabModal> : null)
            }
            </div>
        )
}
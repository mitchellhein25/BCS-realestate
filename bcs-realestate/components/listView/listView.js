import React, { useState, useEffect } from 'react'
import DetailedListView from '../detailedListView/detailedListView'
import Modal from '../modal/modal'
import listViewStyles from './listView.module.css'

export default function ListView({ title, itemList }) {
    const [state, setState] = useState({open: false, activeButton: -1});

    const handleButtonClick = (idx) => {
        setState({ open: true, activeButton: idx })
     }

    return (
            <div className={listViewStyles.columnContainer}>
            <h2 className={listViewStyles.header2}>{title}</h2>
                {itemList.map((li, idx) => (
                    <button key={idx}
                        className={`${listViewStyles.listItem} ${idx % 2 != 0 ? listViewStyles.lightRed : listViewStyles.white}`}
                        onClick={() => handleButtonClick(idx)}>
                        <p>{li.name}</p>
                    </button>
                ))}
            {(state.open ?
                <Modal state={state} setState={setState}>
                    <DetailedListView itemList={itemList[state.activeButton].list}></DetailedListView>
                </Modal> : null
            )}
            </div>
        )
}
import React from 'react'
import Image from 'next/image'
import detailedListViewStyles from './detailedListView.module.css'

export default function DetailedListView({ itemList }) {
    return (
        <div className={detailedListViewStyles.container}>
            {itemList.map((li, idx) => (
                <div key={idx} className={detailedListViewStyles.listItem}>
                    <div className={detailedListViewStyles.detailContainer}>
                        <h3 className={detailedListViewStyles.liHeader}>{li.name}</h3>
                            {li.details.phone ?
                            <p className={detailedListViewStyles.detailItem}>
                                    <b>Phone</b>: {li.details.phone}</p>
                                : null
                            }
                        {li.details.address ?
                            <div className={detailedListViewStyles.detailItem + ' ' + detailedListViewStyles.toRow}>
                                <p className={detailedListViewStyles.addressNoMargin}><b>Address</b>:&nbsp;</p>
                                <p className={detailedListViewStyles.addressNoMargin}>{li.details.address.addressLine1}<br></br>
                                   {li.details.address.addressLine2}</p>
                            </div>
                            : null
                        }
                        {li.details.description ?
                            <div className={detailedListViewStyles.detailItem + ' ' + detailedListViewStyles.toRow}>
                                <p className={detailedListViewStyles.description}>{li.details.description}</p>
                            </div>
                            : null
                        }
                        {li.details.features ?
                            <div className={detailedListViewStyles.detailItem + ' ' + detailedListViewStyles.toRow}>
                                <p className={detailedListViewStyles.features}><b>Features</b>:&nbsp;{li.details.features}</p>
                            </div>
                            : null
                        }
                        {li.details.website ?
                            <p className={detailedListViewStyles.website}>
                                <a target='_blank' rel='noreferrer' href={li.details.website}>{li.details.websiteText}</a></p>
                            : null
                        }
                    </div>
                    <div className={detailedListViewStyles.rightContainer}>
                    {li.image ?
                        <div className={detailedListViewStyles.imageContainer}>
                            <Image
                                src={li.image.photo}
                                alt={li.image.photoDesc + ' logo'}
                                width={li.image.photoWidth}
                                height={li.image.photoHeight}
                                className={detailedListViewStyles.imageRounded}
                            />
                        </div> : null
                    }
                    
                    </div>
                </div>
            ))}
        </div>
    )
}
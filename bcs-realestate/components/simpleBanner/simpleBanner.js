import React from 'react'
import simpleBannerStyles from './simpleBanner.module.css'

export default function SimpleBanner({ bannerTitle }) {
    return (
        <div className={simpleBannerStyles.container}>
            <h3 className={simpleBannerStyles.header}>{bannerTitle}</h3>
        </div>
    )
}
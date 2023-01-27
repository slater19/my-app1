import React from 'react'
import './SettingSwipe.css'
export const SettingSwipe = () => {
    return (
        <div className='_SettingSwipemaindiv'>
            <div className='_SettingSwipe'>
                <div>
                    Swipe Count
                </div>
                <div>
                    Know to how many profile you liked and disliked
                </div>
            </div>
            <div className='_SettingLeftSwipe'>
                <div className='_SettingSwipetext'>
                    <div>Left Swipe</div>
                    <div>Total disliked Profile</div>
                </div>
                <div>
                    60
                </div>
            </div>
            <div className='_SettingLeftSwipe'>
                <div className='_SettingSwipetext'>
                    <div>Right Swipe</div>
                    <div>Total Liked Profile</div>
                </div>
                <div>
                    20
                </div>
            </div>
        </div>
    )
}

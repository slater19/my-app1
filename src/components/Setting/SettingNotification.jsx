import React from 'react'
import ExampleTrackChild from '../StylingComponents/Switch'
import './SettingNotification.css'

export const SettingNotification = () => {
  return (
    <div className='_SettingNotification'>
        <div className='_SettingNotificationdiv'>
            Notifications
        </div>
        <div className='_SettingNotificationdiv1'>
            <div className='_SettingNotificationtext'>
                <div>Turn ON/OFF</div>
                <div>It will enable/disable all Notification</div>
            </div>
            <div>
            <ExampleTrackChild/>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Notification.css'
import circle from './circle.svg'   

const Notification = () => {
  return (
    <>
      <div className="notification">
            <div className="notification__body">
                <img
                    src={circle}
                    alt="Success"
                    className="notification__icon"
                />
                Your account has been created! &#128640; 
            </div>
            <div className="notification__progress"></div>
        </div>
    </>
  )
}

export default Notification

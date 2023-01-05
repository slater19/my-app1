import React from 'react';
import './Comment.css';
import Profile from '../../Images/profile.png'

export const Comment = () => {
  return (
    <div>
        <div className='_Comment'>
         Comments 
        </div>
    <div className='_Commentmaindiv'>

        <div className='_Commentimagediv'>
            <img src={Profile}/>
        </div>

        <div className='_Commentdescription'>
            <div className='_Commenttext'>
                <div className='_CommentName'>Tanmay RatnaParkhi</div>
                <div>
                    <div className='_CommentTimeandDate'>
                        <div>14:13</div>
                        <div> | Jan 03,2023</div>
                    </div>
                    <div className='_Commenttextdescription'>
                            Comment Text
                    </div>
                </div>
            </div>
            <div className='_CommentLike'>
                <div>
                    Like 0
                </div>
                <div>
                    Reply 0
                </div>
            </div>
            <div className='_CommentPreviousReply'>
                Show Previous Reply
            </div>
        </div>
    </div>
    </div>
  )
}

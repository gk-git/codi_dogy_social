import React from 'react';
import {Link} from "react-router-dom";
import '../styles/AlertIntro.css';
const AlertIntro = (props) => {
    const {title, content, actionShow, actionText, actionLink, images} = props;
    const actionLinkCopy = actionLink ? actionLink : '/';
    return (
        <div className="intro-alert ">
            <div className="custom-row">

                <div className="profile-block">
                    {
                        images.map((image, index) => {
                            return (
                                <img key={index} src={image.src}
                                     className="circle thumbnail" alt={image.alt}/>
                            )
                        })
                    }
                </div>
                <div className="intro-content">
                    <h3>{title || ''}</h3>
                    <p style={{
                        marginRight: '20px',
                        fontSize: '1.5em'
                    }}>
                        {content || ''}
                    </p>
                    {
                        actionShow ? <Link to={actionLinkCopy} className={'btn btn-primary'}
                                            style={{background: '#377CED'}}>{actionText || ''}</Link> : null
                    }

                </div>
            </div>

        </div>
    )
}
export {AlertIntro};
import React from 'react';
import s from './ProfileInfo.mogule.css';
import Preloader from "../../../Comman/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (! props.profile) {

        return <Preloader/>
    }

    return (
    <div>
        {/*<div>
        <img
            src='data:image/jpeg;base64,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'/>
        </div>*/}
        <div className={s.descriptionBlock}>
        <img className src={props.profile.photos.large}/>
        <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>

    </div>
    </div>
    )

}

export default ProfileInfo;
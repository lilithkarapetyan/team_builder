import React, { Component } from 'react';
import heartFull from '../../assets/heart_full.svg'
import heart from '../../assets/heart.svg'
import deleteIcon from '../../assets/delete.svg'
import classes from './Topic.module.css'

const Topic = (props) => {
    const { title, votingsCount, votedByMe, canDelete } = props.data;
    return (
        <div className={classes.Topic}>
            <div className={classes.Title}>
                <h3>{title}</h3>
                <span>Votings: {votingsCount}</span>
            </div>
            <div className={classes.Options}>
                <img onClick={props.onLike} src={votedByMe ? heartFull : heart} alt="" />
                {canDelete ? <img src={deleteIcon} onClick={props.onDelete} alt="" /> : ""}
            </div>
        </div>
    );
}

export default Topic
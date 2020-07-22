import React from 'react';
import heartFull from '../../assets/heart_full.svg'
import heart from '../../assets/heart.svg'
import classes from './Project.module.css'

const Project = (props) => {
    const { title, description, votedByMe, votingsCount } = props.data;
    return (
        <div className={classes.Project}>
            <div className={classes.Title}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>Votings: {votingsCount}</span>
            </div>
            <div className={classes.Options}>
                <img onClick={props.onLike} src={votedByMe ? heartFull : heart} alt="" />
            </div>
        </div>
    );
}

export default Project
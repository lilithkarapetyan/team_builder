import React from 'react';
import classes from './Team.module.css'

const Team = (props) => {
    const { name, topic, project, members } = props.data;
    return (
        <div className={classes.Team}>
            <div className={classes.Title}>
                <h3>{name}</h3>
                <p><b>Topic:</b> {topic}</p>
                <p><b>Project:</b> {project}</p>
            </div>
            <div >
                {members.map((member, i) => (
                    <div className={classes.Member} key={i}>
                        <img src={member.avatarUrl} alt="" />
                        <span>{member.firstName} </span>
                        <span>{member.lastName}</span>
                    </div>))}
            </div>
        </div >
    );
}

export default Team;
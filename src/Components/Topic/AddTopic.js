import React, { Component } from 'react';
import { TextField } from '@material-ui/core'
import classes from './Topic.module.css'

const Topic = (props) => {

    return (
        <div className={classes.Topic}>
            <div className={classes.Title}>
                <TextField 
                    label="Title"
                    required
                    value={props.value || ""}
                    onChange={(e) => props.onChange(e.target.value)}>
                </TextField>
            </div>
            <div className={classes.Options}>
                <button onClick = {props.onSave} className={classes.Save}>Add</button>
            </div>
        </div>
    );
}

export default Topic
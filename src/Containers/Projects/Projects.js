import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import { getProjects } from '../../Store/Actions/DataActions'


class Projects extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.getProjects();
    }
    render() {
        return (
            <div>
                projects
                {this.props.projects.map(project => <p>{JSON.stringify(project)}</p>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.data.projects || []
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => dispatch(getProjects())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
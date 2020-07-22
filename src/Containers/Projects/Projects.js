import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getProjects, likeProject } from '../../Store/Actions/DataActions'
import Project from '../../Components/Project/Project'

class Projects extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    onLike = (project) => {
        this.props.onProjectLike({
            actionType: (project.votedByMe ? "unlike" : "like"),
            projectId: project.id
        })
    }

    render() {
        return (
            <div>
                {this.props.projects.map((project, i) =>
                    <Project
                        data={project}
                        key={i}
                        onLike={() => this.onLike(project)}
                    />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.data.projects || []
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => dispatch(getProjects()),
        onProjectLike: (payload) => dispatch(likeProject(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
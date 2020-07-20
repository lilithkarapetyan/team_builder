import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import { getTeams } from '../../Store/Actions/DataActions'


class Teams extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.getTeams();
    }
    render() {
        return (
            <div>
                teams
                {this.props.teams.map(team => <p>{JSON.stringify(team)}</p>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        teams: state.data.teams || []
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTeams: () => dispatch(getTeams())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Teams);
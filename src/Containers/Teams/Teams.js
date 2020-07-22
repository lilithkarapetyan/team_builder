import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import { getTeams } from '../../Store/Actions/DataActions'
import Team from '../../Components/Team/Team'

class Teams extends Component {

    componentDidMount() {
        this.props.getTeams();
    }
    render() {
        return (
            <div>
                {this.props.teams.map((team,i) => <Team data={team} key={i} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
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
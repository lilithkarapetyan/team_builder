import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import { getTopics } from '../../Store/Actions/DataActions'


class Topics extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.getTopics();
    }
    render() {
        return (
            <div>
                topics
                {this.props.topics.map(topic => <p>{JSON.stringify(topic)}</p>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        topics: state.data.topics || []
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: () => dispatch(getTopics())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topics);
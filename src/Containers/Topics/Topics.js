import React, { Component } from 'react';
import { connect } from 'react-redux'
import Topic from '../../Components/Topic/Topic'
import AddTopic from '../../Components/Topic/AddTopic'
import { getTopics, likeTopic, addTopic, deleteTopic } from '../../Store/Actions/DataActions'
import classes from './Topics.module.css';


class Topics extends Component {

    state = {
        isAdding: false,
        newTopic: ""
    }
    componentDidMount() {
        this.props.getTopics();
    }

    onLike = (topic) => {
        this.props.onTopicLike({
            actionType: (topic.votedByMe ? "unlike" : "like"),
            topicId: topic.id
        })
    }

    onSave = () => {
        this.props.addTopic({
            title: this.state.newTopic
        })
        this.setState({ newTopic: "", isAdding: false })
    }

    onDelete = (topic) => {
        this.props.deleteTopic({
            topic
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.topics.map((topic, i) => <Topic
                        onLike={() => this.onLike(topic)}
                        data={topic}
                        key={i}
                        onDelete={() => this.onDelete(topic)}
                    />)}
                </div>
                <div>
                    {!this.state.isAdding ? (
                        <button className={classes.Add} onClick={() => this.setState({ isAdding: true })}> + </button>) :
                        <AddTopic onChange={(val) => this.setState({ newTopic: val })}
                            onSave={this.onSave}
                            value={this.state.newTopic}
                        />
                    }
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        topics: state.data.topics || []
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: () => dispatch(getTopics()),
        onTopicLike: (payload) => dispatch(likeTopic(payload)),
        addTopic: (payload) => dispatch(addTopic(payload)),
        deleteTopic: (payload) => dispatch(deleteTopic(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topics);
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as todoActions from "../redux/modules/TodoStore"

/**
 * Connects our component to the store, instead
 * of needing to create a container out of personal
 * preference.
 */
@connect(
    /** Maps the state store
     * to specific props to be loaded on this component */
    (state) => {
        return {
            todos: state.todoStore.todos
        }
    },
    /**
     * Binds dispatch to our action creators, instead of needing
     * to explicity use this.props.dispatch(this.props.action);
     */
    (dispatch) => {
        return bindActionCreators(todoActions, dispatch);
    })
export default class TodoAppContainer extends React.Component {

    onAddClick() {
        this.props.addTodo(Date.now().toString());
    }

    render() {
        let todos = this.props.todos.map((todo) => {
            return <div className="centerMiddle">
                <span
                    className={`text ${todo.complete ? 'complete' : 'incomplete'}`}
                    onClick={this.props.toggleTodo.bind(this, todo.id)}>{todo.text}
                </span>
                <button onClick={this.props.removeTodo.bind(this, todo.id)}>X</button>
            </div>;
        })

        return (
        <div className="centerMiddle">
            <button className="ui button red fluid" onClick={this.onAddClick.bind(this)}>Log In</button>
            <div className="ui divider hidden"></div>
            <button className="ui button blue fluid" >Sign Up</button>

        </div>);
    }
}

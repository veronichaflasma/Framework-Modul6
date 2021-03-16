import React, { Component } from "react";
import { connect } from "react-redux";
import {
    deleteTodo,
    toggleTodo,
    setVisibilityFilter
} from "../actions/actionCreator";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";


class Table extends Component {
 render(){
    return (
        <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li 
                                className={"breadcrumb-item "+ 
                                (this.props.visibilityFilter === SHOW_ALL ? 'active' : '') }
                                onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
                            >All</li>
                            <li
                                className={"breadcrumb-item "+ (this.props.visibilityFilter === 
                                SHOW_COMPLETED ? 'active' : '') }
                                onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
                            >Completed</li>
                            <li
                                className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ACTIVE ? 
                                'active' : '') }
                                onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
                            >Active</li>
                        </ol>
                        </nav>
                        {this.props.todos.length !== 0 ? (
                        <table className="table table-striped table-bordered first">
                            <thead>
                                <tr>
                                    <th>Todos</th>
                                    <th>Actions</th>
                                    <th>Delete</th>
                                    <th>Completed</th>
                                </tr>
                            </thead>
                            <tbody> {this.props.todos.map(todo => ( 
                                <tr key={todo.id}>
                                    <tr> </tr>
                                    <td>
                                        {todo.text} {todo.completed === true ? "(completed)" : ""}
                                    </td>
                                    <td >
                                        <i className="fas fa-minus-circle" onClick={() => this.props.deleteTodo(todo.id)} ></i>
                                    </td>
                                    <td >
                                        <i className="fas fa-check-circle" onClick={() => this.props.toggleTodo(todo.id)}></i>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <div style={{ marginTop: "50px" }} className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1">
                            <div className="alert alert-danger" role="alert">
                                Todo List is empty or Filter results show no results
                            </div>
                        </div>
                    )}{" "}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
    }
}


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
        return todos;
        case SHOW_COMPLETED:
        return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
        default:
        throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = state => {
    return { 
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            deleteTodo,
            toggleTodo,
            setVisibilityFilter
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

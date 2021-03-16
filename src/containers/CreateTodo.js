import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
        }

        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

onChangeTodoText(e){
    this.setState({
        todotext: e.target.value
    })
}

render(){
    return (
        <div className="form-group row">
            <div className="col-sm-10">
                <input 
                    onChange={this.onChangeTodoText} 
                    value={this.state.todotext}
                    type="text" className="form-control"
                    placeholder="add todo here"
                />

                <p></p>

                <button type="submit" onClick={ () => this.setState({ todotext: '' }) } 
                    className="btn btn-space btn-danger">Cancel</button>
                <button type="submit" onClick={() =>{this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) } } 
                    className="btn btn-space btn-success">Add Todo</button>
            </div>
        </div> 
 );
}

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
        }, dispatch
    )
}

export default connect(null, mapDispatchToProps)(CreateTodo)
import React from "react";
import ListEntry from "./ListEntry.jsx"
class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: "",
            todos: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler (e) {
        this.setState({
            [e.target.name]: e.target.value
            
        },()=>console.log(this.state.todo))
        
    }
    onSubmitHandler(e) {
        e.preventDefault();
        let currentTodos =  this.state.todos;
        currentTodos.push(this.state.todo);
        this.setState ({
            todos: currentTodos,
            todo:""
        },()=>console.log(this.state))
        document.getElementById('form').reset();
    }

    render() {
        return (
            <div>
                <form id="form" onSubmit={this.onSubmitHandler}>
                    <label>New Todo: 
                        <input onChange={this.onChangeHandler} name="todo" required></input>
                    </label>
                    <input type="submit" value="submit"></input>
                </form>
                <ul>
                {this.state.todos.map((todo, index) => (
                   <ListEntry todo={todo} key={index} index={index} />

                ))}

                </ul>
            </div>
        )
    }
}
export default List;
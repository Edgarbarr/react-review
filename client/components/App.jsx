import React from "react";
import List from "./List.jsx";

class App extends React.Component{ 
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "" 
        }
        this.onChangeHandler=this.onChangeHandler.bind(this);
    }

    onChangeHandler (e) {
        this.setState({
            [e.target.name]: e.target.value
            
        },()=>console.log(this.state))
        
    }
    render() {
        return (
        <div>
            {
            this.state.firstName === this.props.firstName && this.state.lastName === this.props.lastName ? 
            (<List/>) : (
            <form onChange={this.onChangeHandler}>
                <label>First Name: 
                    <input name="firstName" placeholder="first name" type="text"></input>
                </label>
                <label>Last Name: 
                    <input name="lastName" placeholder="last name" type="text"></input>
                </label>
            </form>
            )
            }
        </div> 
        )      
    }
}
export default App;
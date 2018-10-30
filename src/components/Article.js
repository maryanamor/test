import React, {Component} from "react";

class Article extends Component{

    state = {
        isOpen: true
    }

    render() {
        const {users} = this.props;
        console.log("---", this.props);
        const body = this.state.isOpen && <section>{users.name}</section>
        return (
            <div>
                <h2>
                    Title
                    <button onClick={this.handleClick}>{this.state.isOpen ? "close" : "open"}</button>
                </h2>
                {body}
                <h3>creation date: {(new Date()).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        console.log("---", 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
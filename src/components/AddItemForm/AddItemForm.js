import React, {Component} from 'react';
import './AddItemForm.css';

export default class AddItemForm  extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        console.log(e.target.value)
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="add-item-form d-flex" onSubmit={this.onSubmit}>

                <input
                    type="text"
                    className="form-control"
                    value={this.state.label}
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                />
                <button
                    className="btn btn-outline-secondary"
                >
                    Add item
                </button>
            </form>
        )
    }
};

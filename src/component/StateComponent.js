import React from 'react';

/**
 * State component of the UI.
 *
 * @author  Sachith Ariyathilaka
 * @version 1.0.0
 * @since   2024/12/22
 */
export class StateComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Sachith Ariyathilaka",
            count: 0
        }
    }

    handleSubmit = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h3>Welcome {this.state.name} to the React Component Tutorial</h3>
                <button onClick={this.handleSubmit}>{'Click count is: ' + this.state.count}</button>
            </div>
        );
    }
}

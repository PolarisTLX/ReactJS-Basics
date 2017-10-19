import React from "react";
//aldo need "browserHistory" to make the navigate button work:
import { browserHistory } from "react-router";

export class User extends React.Component {

    //Lecture 16 Last lecture, to add the button below to navigate home on click
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}

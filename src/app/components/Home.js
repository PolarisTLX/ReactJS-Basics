/*
File completely emptied and reset to go through React-Router example in Lecture 15:
*/

import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}


/*  BEFORE LECTURE-15 on React-Router
//
// import React from "react";
// //need this line below for newer version of react to work in this tutorial
// import PropTypes from 'prop-types'
//
// export class Home extends React.Component {
//
//   //this is ES6 stuff, Lecture 7
//   //props  and  props.age  come from outside  in index.js call to this component: < Home name={"Max"} age={27} />
//   constructor(props) {
//     super();
//     //setting the props.age (that was given in the index.js file) to a new variable:
//     this.state = {
//                age: props.initialAge,
//                status: 0,
//                homeLink: "Type Desired Link Name Here"
//            };
//     //example adding a setTimeout:
//     setTimeout(() => {
//       this.setState({
//         status: + 1
//       });
//     },2000);
//     //Lecture 14: observing component lifecycle
//     console.log("Constructor");
//   }
//
// //first method in componenet lifecycle that gets executed
//   componentWillMount() {
//     console.log("Component will mount");
//   }
//   componentDidMount() {
//     console.log("Component did mount");
//   }
//   componentWillReceiveProps(nextProps) {
//     //this one will appear when user inputs in the text field
//     console.log("Component will receive props", nextProps);
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("Should Component Update", nextProps, nextState);
//     //currently the next parts go automatically, because of the "setTimeout(() => {.... status = 1..."
//     /*to not make that trigger the update, we block React by telling it to ignore for this example like so:
//     if (nextState.status === 1) {
//       return false;
//     }
//     //NOTE: you will observe that it blocks further changes aftet 2 seconds, b/c that is when the setTimout makes the status = 1
//
//     //NOTE:  MPORTANT TO OBSERVE: nextState is the state of the component
//     //just below: constructor(props) {  super();
//     */
//
//     //need to return true so that the code continues?
//     return true;
//   }
//   componentWillUpdate(nextProps, nextState) {
//     console.log("Component will update", nextProps, nextState);
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component did update", prevProps, prevState);
//   }
//   componentWillUnmount() {
//   //this one needs additional details to make it trigger and be observed, done in index.js file
//     console.log("Component will unmount");
//   }
//   //end of component lifecycle / order of excution examples from Lecture 14
//
//
//   onMakeOlder() {
//     //setState is IMPORTANT FOR INTERACTIVITY
//     //this causes React to re-render
//     this.setState({
//       age: this.state.age + 3
//     });
//   }
//
//   onChangeLink() {
//     this.props.changeLink(this.state.homeLink);
//   }
//
//   //lecture 13 for two-way binding to allow user imput:
//   onHandleChange(event) {
//     this.setState({
//       homeLink: event.target.value
//       //event.target is the input field, the value is what has been input
//     });
//   }
//
//   render() {
//     return (
//       <div>
//
//         <p>Your name is {this.props.name}, age is {this.state.age}</p>
//         <p>To show that the aspect called "status" doesn&#8217;t change: Status = {this.state.status}</p>
//         <hr/>
//
//         <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
//         <hr/>
//
//         <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
//         <hr/>
//
//         <input type="text"
//                value={this.state.homeLink}
//                onChange={(event) => this.onHandleChange(event)} />
//         <button onClick={() => this.onChangeLink()} className="btn btn-primary">Click to change the Header Link</button>
//       </div>
//     );
//   }
// }
//
//
// // key detail is the {}  to pass data into the component from either
// //1) above its "return (" call
// //or 2) from external props that are passed to it
//
// // Valid javascript code can be placed within { } as the { 2 + 2 } in the example above
// //NOTE: Must be all in one line only
//
// //NOTE: in the looping example: {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
// //"hobby" is word chosen at random just for that function
// //CAUTION: calling < Home /> multiple times but not all of them have the same props passed may cause issues
//
// // {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
// //to avoid a different warning, each item produced, in this case a <li> item, should be given a unique key:
// //{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
//
// //to pass more <div>s or <p>s or <h1>s between the < Home/ >  need  {this.props.children}
// //see also index.js,  < Home/>  becomes split into  < Home > < /Home >
//
// /*
// To allow user input, two-way binding, need to include the "onChange={}" listener:
// <input type="text"
//        value={this.state.homeLink}  //this line was also changed to allow this
//        onChange={(event) => this.onHandleChange(event)} />
// */
//
//
// //this is just a good practice apparently, to prevent accidental re-asigning a variable to a different type
// //PROP Types:  tell react the type of each property you are expecting:
// Home.propTypes = {
//   name: PropTypes.string,
//   initialAge: PropTypes.number,
//   greet: PropTypes.func,
//   initialLinkName: PropTypes.string
// };
// /*NOTE:  For those using latest React version: use prop-types instead of React.PropTypes.#dataType#
//
// 1) npm install --save-dev prop-types
// 2) In Home.js:
// import PropTypes from 'prop-types'
//
// 3)
// Home.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     user: PropTypes.object
// }﻿
// */

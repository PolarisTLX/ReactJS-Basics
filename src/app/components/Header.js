/*
File completely emptied and reset to go through React-Router example in Lecture 15:
*/

import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
                        <li><Link to={"/user/10"} activeClassName={"active"}>User</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

/*  BEFORE LECTURE-15 on React-Router

// //STATELESS COMPONENT - These are more efficient and best to use unless you need to otherwise
// import React from "react";
//
// /*because this components has no "states" to be changed, it is a "stateless component"
// and these are best if you can use them, as they are more efficient.
// But need change a few things such as the "class" to "const"
// Compare below:
//
// export class Header extends React.Component {
//   render() {
//     return (
//           .
//           .
//           .
//     );
//   }
// }
// */
//
// export const Header = (props) => {
//     return (
//       <nav className="navbar navbar-default">
//         <div className="container">
//           <div className="navbar-header">
//             <ul className="nav navbar-nav">
//               <li><a href="#">{props.homeLink}</a></li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   };

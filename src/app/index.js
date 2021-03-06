import React from "react";
import { render } from "react-dom";

//now import seperate components:
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      //for Lecture 14 component lifecycle:
      homeMounted: true
    };
  }

  onGreet() {
    alert("Hello!");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  //for Lecture 14 component lifecycle:
  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {

    //for Lecture 14 component lifecycle:
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp =   < Home name={"Max"}
                         initialAge={27}
                         greet={this.onGreet}
                         changeLink={this.onChangeLinkName.bind(this)}
                         initialLinkName={this.state.homeLink}
                  />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            < Header homeLink={this.state.homeLink}/ >
          </div>
        </div>
        <p>additional text</p>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>Hello World!</h1>

            < Home name={"Max"}
                   initialAge={27}
                   greet={this.onGreet}
                   changeLink={this.onChangeLinkName.bind(this)}
                   initialLinkName={this.state.homeLink}
            />

          </div>
        </div>
      </div>
    );
  }
}

//render(what you want to render, where you want to render it in the HTML (index.HTML)
//NOTE: can only return ONE element. In this case the <div></div>
//(nested elements, like the <h1></h1> inside it do not count)
//could not have two <div>s beside each other / sibling elements
render(<App/>, window.document.getElementById("app"));


//to pass more <div>s or <p>s or <h1>s between the < Home/ >  need  {this.props.children}
//see also index.js,  < Home/>  becomes split into  < Home > < /Home >


/*To pass data from a child component to a parent component:
Parent Compoentes is class App (above)
Child components is < Home name={"Max"} init... / > placed within the return of class App
< Home/ > refers to a component in another file, Home.js

-create a function above the "render ("  call of parent components "class App",
in this case the function called "onGreet() {"
-then pass that function to the HTML child component as a props/link:  greet={this.onGreet}
-then go the the file of that component to add that link {this.props.greet} in the "return (" such as:
<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
-also want to configure/type-cast by adding it it in the component's "Home.propTypes = {":
greet: PropTypes.func

*/

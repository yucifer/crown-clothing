import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log("currently ", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

// const HomePage = (props) => {
//   console.log(props);
//   return <h1>HOME PAGE</h1>;
// };

// const TopicsList = () => {
//   return <h1>Topics List Page</h1>;
// };

// const TopicDetail = (props) => {
//   console.log(props);
//   return <h1>TOPIC DETAIL PAGE : </h1>;
// };

// const App = () => {
//   return (
//     <div className="app">
//       <Route exact path="/" component={HomePage} />
//       <Route exact path="/topics" component={TopicsList} />
//       <Route exact path="/topics/:topicId" component={TopicDetail} />
//     </div>
//   );
// };

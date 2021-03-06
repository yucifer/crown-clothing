import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileContent } from "./firebase/firebase.utils";

import { connect } from "react-redux";

import setCurrentUser from "./redux/user/user.actions";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileContent(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
        // this.setState({ currentUser: userAuth }, () =>
        //   console.log("Current User :", this.state.currentUser)
        // );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }

  render() {
    console.log("NODE_ENV = ", process.env.NODE_ENV);
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

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

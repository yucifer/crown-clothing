import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return <h1>HatsPage</h1>;
};

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
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

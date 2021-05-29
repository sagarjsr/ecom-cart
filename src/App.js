
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/header/Footer";
import { Fragment } from 'react';


const theme = createMuiTheme({
  palette: {
    background: "#00c8c8",
    footer: "#666",
    color3: "#373F51",
    color4: "#eeeeee",
    color5: "#ffffff",
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
      </Router>
    </Fragment>
  );
}

export default App;

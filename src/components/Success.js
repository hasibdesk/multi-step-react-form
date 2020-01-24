import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import List, { ListItem } from "material-ui/List";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for submitting the form</h1>
          <p>We will let you know the detail via the message.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;

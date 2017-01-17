import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


export default class BotAppContainer extends React.Component {
  render() {
      return (
        <div className="centerMiddle">
            <button className="ui button red fluid">Log In</button>
            <div className="ui divider hidden"></div>
            <button className="ui button blue fluid" >Sign Up</button>
        </div>);
  }
}

/**
 * Created by fylder on 2017/5/13.
 */
import React, {Component} from "react";
import {pink500} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

const styles = {

    title: {
        color: '#FFFFFF',
    },
    theme: {
        background: pink500,
    },
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: pink500,
    },
});

class PhotoTitle extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleTouchTapLogo = this.handleTouchTapLogo.bind(this);
        this.handleTouchTapLogin = this.handleTouchTapLogin.bind(this);
    }

    handleTouchTapLogo() {
        alert("click logo");
    }

    handleTouchTapLogin() {
        window.location.href = "register.html";
    }

    render() {

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar zDepth={2} style={styles.theme}
                        title={<a style={styles.title} href="http://www.fylder.me:8080/photo">Photo</a> }
                        iconElementLeft={<div></div>}
                        iconElementRight={<FlatButton label="REGISTER"
                                                      onTouchTap={this.handleTouchTapLogin}/>}
                />
            </MuiThemeProvider>
        );
    }
}

export default PhotoTitle;

import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class HomePage extends Component  {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount = async () => {

    };

    render() {
        return (
            <div>

            </div>
        )
    }
}


HomePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};
const mapStateToProps = (state) => ({
    isAuth: !!state.auth.token,
    user: state.user
});

export default connect(mapStateToProps)(HomePage);
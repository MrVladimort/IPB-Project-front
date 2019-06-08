import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Header, Container, Segment, Grid} from "semantic-ui-react";

class Profile extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const {name, surname, email, phone, role} = this.props.user;
        return (
            <Container text>
                <Segment>
                    <Grid celled='internally'>
                        <Grid.Row>
                            <Grid.Column>
                                <Header content={`Surname: ${surname}`}/>
                                <Header content={`Name: ${name}`}/>
                                {phone && <Header content={`Phone: ${phone}`}/>}
                                <Header content={`Email: ${email}`}/>
                                <Header content={`Role: ${role}`}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
        );
    }
}

Profile.propTypes = {
    user: PropTypes.shape(),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Profile);

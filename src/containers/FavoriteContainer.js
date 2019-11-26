import React, {Component} from 'react';
import { connect } from 'react-redux';
import FavoriteList from '../components/FavoriteList';

class FavoriteContainer extends Component {
    render() {
        const { contacts } = this.props;
        return (
            <FavoriteList contacts={contacts} />
        );
    }
};

export default connect(
    (state) => ({
        contacts: state.contact.get('contacts'),
    })
)(FavoriteContainer);
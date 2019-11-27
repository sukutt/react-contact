import { connect } from 'react-redux';
import FavoriteList from '../components/FavoriteList';

export default connect(
    ({contacts}) => ({
        contacts,
    })
)(FavoriteList);
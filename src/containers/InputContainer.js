import React, {Component} from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { bindActionCreators } from 'redux';
import * as baseActions from '../redux/modules/base'

class InputContainer extends Component {

    handleChange = (e) => {
        const {BaseActions} = this.props;
        BaseActions.search(e.target.value);
    }

    render() {
        const {handleChange} = this;
        const {keyword} = this.props;

        return (
            <Input 
                onChange={handleChange}
                value={keyword}
                placeholder="검색"
            />
       )
   } 
};

export default connect(
    (state) => ({
        keyword: state.base.get('keyword'),
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(InputContainer);

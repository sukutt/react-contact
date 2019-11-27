import React, {Component} from 'react';
import FloatingButton from '../components/FloatingButton';
import { connect } from 'react-redux';
import oc from 'open-color';
import { bindActionCreators } from 'redux';
import * as baseActions from '../redux/modules/base';
import * as modalActions from '../redux/modules/modal';

function generateRandomColor() {
    const colors = [
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange'
    ];

    // 0 부터 12까지 랜덤 숫자
    const random = Math.floor(Math.random() * 13);

    return oc[colors[random]][6];
}

class FloatingButtonContainer extends Component {

    handleClick = () => {
        const {BaseActions, ModalActions} = this.props;

        // view 전환
        BaseActions.setView('list');

        // Modal
        ModalActions.show({
            mode: 'create',
            contact: {
                name: '',
                phone: '',
                color: generateRandomColor()
            }
        });
    }

    render() {
        const {handleClick} = this;
        return (
            <FloatingButton onClick={handleClick}/>
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        ModalActions: bindActionCreators(modalActions, dispatch)
    })
)(FloatingButtonContainer);

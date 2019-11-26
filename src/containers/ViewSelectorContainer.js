import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../redux/modules/base';
import ViewSelector from '../components/ViewSelector';

class ViewSelectorContainer extends Component {
    // 클릭된 탭에서 필요 view가 무엇인지 얻어온다.
    handleSelect = (view) => {
        const { BaseActions } = this.props;
        BaseActions.setView(view);
    }

    render() {
        const { view } = this.props;
        const { handleSelect } = this;

        return (
            <ViewSelector onSelect={handleSelect} selected={view}/>
        )
    }
}

// redux와 container를 연결하는 부분
// 연결 한다는것은 container에서 발생하는 action을
// store에 전달해야한다는 의미, 고로 dispatch를
// 할 수 있어야 한다.
export default connect(
    (state) => ({
        view: state.base.get('view')
    }),
    (dispatch) => ({
        // bindActionCreators 는 액션함수들을 자동으로 바인딩해줍니다.
        BaseActions: bindActionCreators(baseActions, dispatch)
    }) 
)(ViewSelectorContainer);

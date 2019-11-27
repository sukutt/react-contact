import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelectorContainer from './containers/ViewSelectorContainer';
import FavoriteContainer from './containers/FavoriteContainer';
import ContactListContainer from './containers/ContactListContainer';
import InputContainer from './containers/InputContainer';
import FloatingButtonContainer from './containers/FloatingButtonContainer';
import ContactModalContainer from './containers/ContactModalContainer';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        const { view } = this.props;

        return (
            <div>
                <Header/>
                <ViewSelectorContainer />
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>
                    <FavoriteContainer/>
                </Container>
                <Container visible={view==='list'}>
                    <InputContainer/>
                    <ContactListContainer />
                </Container>
                <ContactModalContainer/>
                <FloatingButtonContainer/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        view: state.base.get('view')
    })
)(App);
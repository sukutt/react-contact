import React, {Component} from 'react';
import { connect } from 'react-redux';
import ContactList from '../components/ContactList';
import { bindActionCreators } from 'redux';
import * as contactActions from '../redux/modules/contacts';
import * as modalActions from '../redux/modules/modal';

class ContactListContainer extends Component {
    // 즐겨찾기 추가
    handleFavorite = (id) => {
        const { ContactActions } = this.props;
        ContactActions.toggleFavorite(id);
    }

    // 수정창 Modal
    handleModal = (id) => {
        const { ModalActions, contacts } = this.props;

        // 객체 찾기
        const contact = contacts.find(contact => contact.get('id') === id);
        
        ModalActions.show({
            mode: 'modify',
            contact: contact.toJS(),
        });
    }

    render() {
        const {contacts, keyword} = this.props;
        const {handleFavorite, handleModal} = this;
        return (
            <ContactList 
                contacts={contacts} 
                keyword={keyword}
                onOpenModify={handleModal}
                onToggleFavorite={handleFavorite}
            />
        );
    }
}

export default connect(
    (state) => ({
        contacts: state.contacts,
        keyword: state.base.get('keyword')
    }),
    (dispatch) => ({
        ContactActions: bindActionCreators(contactActions, dispatch),
        ModalActions: bindActionCreators(modalActions, dispatch)
    })
)(ContactListContainer);
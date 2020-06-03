import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { setModal } from '../../actions/session_modal_actions';

const mstp = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mdtp = dispatch => ({
  signup: () => dispatch(setModal('signup')),
  logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(NavBar);

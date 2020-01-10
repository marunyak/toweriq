/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import UserItem from './components/UserItem';
import Spinner from '../../components/spinner/spinner';
import { getUsersFetch } from '../../services';
import { fetchUsers } from '../../actions';

class UsersPage extends React.Component {
  componentDidMount() {
    const { getUsersFetch } = this.props;
    getUsersFetch();
  }

  render() {
    const { users, loading, error } = this.props;
    const hasData = !(loading || error);
    const newItem = hasData ? users.map((item) => (
      <UserItem user={item} key={item.id} />
    )) : null;
    return (
      <>
        <Header />
        <Main>
          <div className="users-list">
            { loading ? <Spinner /> : null }
            {!loading && error && 'Error ...'}
            {newItem}
          </div>
        </Main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => (
  {
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
  }
);

const mapDispatchToProps = (dispatch) => ({
  getUsersFetch: () => {
    dispatch(fetchUsers());
    return dispatch(getUsersFetch());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);

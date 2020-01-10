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
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      perPage: 5
    };
  }

  componentDidMount() {
    const { getUsersFetch } = this.props;
    getUsersFetch();
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { currentPage, perPage } = this.state;
    const { users, loading, error } = this.props;
    const pageNumbers = [];

    const indexLast = currentPage * perPage;
    const indexFirst = indexLast - perPage;
    const currentTodos = users.slice(indexFirst, indexLast);

    const newItem = !(loading || error) ? currentTodos.map((item) => (
      <UserItem user={item} key={item.id} />
    )) : null;

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= Math.ceil(users.length / perPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        key={number}
        className={currentPage === number ? 'active' : null}
        id={number}
        onClick={this.handleClick}
      >
        {number}
      </li>
    ));

    return (
      <>
        <Header />
        <Main>
          <div className="users-list">
            { loading ? <Spinner /> : null }
            {!loading && error && 'Error ...'}
            {newItem}
          </div>
          <ul className="pagination">
            {renderPageNumbers || null}
          </ul>
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

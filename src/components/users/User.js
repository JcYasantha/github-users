import React, { Component } from "react";
import Loading from "../Loading";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };

  render() {
    const { login, name, avatar_url, bio, blog } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Loading />;
    return (
      <div className='row mt-3'>
        <div className='col-md-4'>
          <img
            className='card-img-top avatar-user'
            src={avatar_url}
            alt='avatar'></img>
          <div className='mt-3 text-left'>
            <h3 style={{ margin: 0 }}>{name}</h3>
            <p className='mt-0'>{login}</p>
            <p className='mt-0'>{bio}</p>

            <a
              target='_blank'
              style={{ color: "white" }}
              rel='noopener noreferrer'
              href={blog}>
              <i className='fa fa-link' aria-hidden='true'></i> {blog}
            </a>
          </div>
        </div>
        <div className='col-md-8'>
          <h2>Repositories</h2>
          <Repos repos={this.props.repos} />
        </div>
      </div>
    );
  }
}

export default User;

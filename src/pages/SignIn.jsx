import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { signUp, login, getEmptyUser, logout } from '../store/actions/userActions';

class _SignIn extends Component {
  state = {
    user: null,
    isLogin: false,
  };

  async componentDidMount() {
    await this.props.logout();
    console.log('here');
    const type = this.props.match.url;
    if (type === '/login') this.setState({ isLogin: true });
    else this.setState({ isLogin: false });
    const user = await this.props.getEmptyUser();
    this.setState({ user });
  }

  onSign = async (ev) => {
    ev.preventDefault();
    if (!this.state.isLogin) await this.props.signUp({ ...this.state.user });
    else {
      const isValid = await this.props.login({ ...this.state.user });
      if (isValid) this.props.history.push('/');
      else return;
    }
    this.props.history.push('/');
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({ user: { ...prevState.user, [field]: value } }));
  };

  switchForm = () => {
    this.setState(
      (prevState) => ({ isLogin: !prevState.isLogin }),
      () => {
        if (this.state.isLogin) this.props.history.push('/login');
        else this.props.history.push('/signup');
      }
    );
  };

  render() {
    let { user, isLogin } = this.state;
    return (
      <section className="signin-page flex column align-center">
        <h1 className="sign-title">{isLogin ? 'Login' : 'Sign Up'}</h1>
        {user && (
          <form onSubmit={this.onSign} className="form-design flex column ">
            {!isLogin && (
              <div class="signup-part flex column">
                <label htmlFor="name">Name</label>
                <input ref={this.inputRef} onChange={this.handleChange} value={user.name} type="text" name="name" id="name" placeholder="Name" />

                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} value={user.email} type="text" name="email" id="email" placeholder="Email" />

                <label htmlFor="phone">Phone</label>
                <input onChange={this.handleChange} value={user.phone} type="text" name="phone" id="phone" placeholder="Phone number" />
              </div>
            )}

            <label htmlFor="name">Username</label>
            <input onChange={this.handleChange} value={user.username} type="text" name="username" id="username" placeholder="Username" />

            <label htmlFor="name">Password</label>
            <input onChange={this.handleChange} value={user.password} type="text" name="password" id="password" placeholder="Password" />
            {isLogin && <button className="submit-btn">Login</button>}
            {!isLogin && <button className="submit-btn">Sign Up</button>}
          </form>
        )}
        {isLogin && (
          <div>
            <span>Don't have an account yet? </span>

            <button onClick={this.switchForm} className="switch-form-btn">
              Sign Up
            </button>
          </div>
        )}
        {!isLogin && (
          <div>
            <span>Already have account ? </span>
            <button onClick={this.switchForm} className="switch-form-btn">
              Login
            </button>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.user,
  };
};

const mapDispatchToProps = {
  signUp,
  login,
  getEmptyUser,
  logout,
};

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(_SignIn);

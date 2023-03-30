import React, { Component } from 'react';

class ConvertkitEmailForm extends Component {
  state = {
    message: '',
    email: '',
  };

  emailHandler = (e) => {
    let updatedEmail = e.target.value;
    this.setState({ email: updatedEmail });
  };

  subscribeUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/ConvertkitSubscribe', {
      body: JSON.stringify({ email: this.state.email }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
    });

    const json_res = await res.json();

    this.setState({
      message: json_res.message,
      email: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.subscribeUser}>
        <div className="input-group">
          <input
            id="newsletter-input"
            type="email"
            name="email"
            className="form-control shadow-none"
            placeholder="Enter your email"
            aria-label="Enter Email Address"
            aria-describedby="nnewsletter-btn"
            value={this.state.email}
            onChange={this.emailHandler}
            required
            autoCapitalize="off"
            autoCorrect="off"
          />
          <button
            type="submit"
            id="newsletter-btn"
            className="btn btn-primary btn-lg font-title"
            value=""
            name="subscribe"
          >
            NOTIFY ME
          </button>
        </div>
        <p id="newsletter-message" className="text-center">
          {this.state.message}
        </p>
      </form>
    );
  }
}

export default ConvertkitEmailForm;

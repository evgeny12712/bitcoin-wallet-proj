import { Component } from 'react';

export class ContactFilter extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state);
    });
  };

  render() {
    const { name } = this.state;
    return (
      <form className="contact-filter">
        <section className="input-container flex justify-center gap">
          <label htmlFor="name">Search : </label>
          <input onChange={this.handleChange} value={name} type="text" name="name" id="name" placeholder="Contact Name..." />
        </section>
      </form>
    );
  }
}

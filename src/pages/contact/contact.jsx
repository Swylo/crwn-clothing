import React from "react";
import "./contact.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: "",
    });
    alert("Thanks for sending us a message!");
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact">
        <h2 className="title">
          Want to contact us? Send us a message by filling the form below!
        </h2>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            label="Name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <div className="text-area">
            <textarea
              className="text-area-input"
              name="message"
              id="message"
              cols="30"
              rows="5"
              value={message}
              onChange={this.handleChange}
              required
            />
            <label
              htmlFor="message"
              className={`${message.length ? "shrink" : ""} text-area-label`}
            >
              Message
            </label>
          </div>
          <CustomButton type="submit" className="button">
            CONTACT US
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactPage;

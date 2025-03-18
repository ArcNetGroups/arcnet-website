import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

export const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    const newErrors = {};
    if (!name) newErrors.name = "*Kindly input your name";
    if (!email) newErrors.email = "*Kindly input your mail";
    if (!text) newErrors.text = "*Kindly include this field";

    setErrors(newErrors);

    // If any field is empty, stop form submission
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await fetch("https://arcnet-website-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: text }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setText("");
        setErrors({});
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="innerDiv section-title">
                <h2>User Waitlist</h2>
                <p>
                  Please fill out the form below to send us an email with your message if you would be interested in
                  using our platform after it is launched.
                </p>
              </div>
              <form name="sentMessage">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                  {errors.text && <p className="error-text">{errors.text}</p>}
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading..."}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 ArcnetLabs. Designed by Meghna Malasi</p>
        </div>
      </div>
    </div>
  );
};

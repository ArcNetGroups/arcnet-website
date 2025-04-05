import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

export const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [fillInput, setFillInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !text) {
      setFillInput(true);
      return;
    }
  
    try {
      const response = await fetch("https://arcnet-website-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: text }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("Message sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setText("");
      } else {
        toast.error(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
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
                Fill out the form below to express your interest in using our platform once it's launched.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
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
                        required
                      />
                      <p className={fillInput ? "block" : "hidden"}>*Kindly input your name</p>
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
                        required
                      />
                      <p className={fillInput ? "block" : "hidden"}>*Kindly input your mail</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your insights and feedback are valuable to us! 😊"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                  ></textarea>
                  <p className={fillInput ? "block" : "hidden"}>*Kindly include this field</p>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
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

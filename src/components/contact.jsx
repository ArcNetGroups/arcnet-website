import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import "../styles/fixes.css";
import "../styles/sections.css";
import "../styles/waitlist.css";

export const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});
  const [waitlistCount, setWaitlistCount] = useState(487);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Increment waitlist count randomly for effect
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setWaitlistCount(prevCount => prevCount + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    const newErrors = {};
    if (!name) newErrors.name = "*Kindly input your name";
    if (!email) newErrors.email = "*Kindly input your email";
    if (!text) newErrors.text = "*Kindly include this field";

    setErrors(newErrors);

    // If any field is empty, stop form submission
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://arcnet-website-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: text }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("You've successfully joined our waitlist!");
        setName("");
        setEmail("");
        setText("");
        setErrors({});
        setWaitlistCount(prevCount => prevCount + 1);
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="waitlist">
      <div className="container waitlist-container">
        <div className="row">
          <div className="col-md-6">
            <div className="waitlist-content">
              <div className="waitlist-title">
                <h2>Join the Waitlist</h2>
                <span className="beta-tag">Coming Soon</span>
                <p>
                  Be among the first to experience Prime when we launch. Join our exclusive waitlist today and get early access to the platform that will transform how you engage with your audience.
                </p>
              </div>

              <div className="waitlist-features">
                <div className="waitlist-feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Get notified when Prime launches</span>
                </div>
                <div className="waitlist-feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Early access to premium features</span>
                </div>
                <div className="waitlist-feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Special offers for early supporters</span>
                </div>
                <div className="waitlist-feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Priority onboarding assistance</span>
                </div>
              </div>

              <div className="waitlist-count">
                <i className="fa fa-users"></i>
                <span>{waitlistCount}+ people have already joined</span>
              </div>

              <div className="waitlist-contact">
                <h4>Have Questions?</h4>
                <div className="contact-method">
                  <i className="fa fa-envelope"></i>
                  <p>{props.data ? props.data.email : "contact@primehq.com"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="waitlist-form">
              <h3>Reserve Your Spot</h3>
              <form name="sentMessage">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">How will you use Prime?</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Share your business needs or content expertise. What are you hoping to achieve with Prime? (e.g., community building, content monetization, audience engagement)"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                  {errors.text && <p className="error-text">{errors.text}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-waitlist"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span><i className="fa fa-circle-o-notch fa-spin"></i> Processing...</span>
                  ) : (
                    <span>Join Waitlist</span>
                  )}
                </button>
              </form>
              <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
            </div>
          </div>
        </div>

        <div className="waitlist-social">
          <ul>
            <li>
              <a href={props.data ? props.data.linkedin : "/"} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.twitter : "/"} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

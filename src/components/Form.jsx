import "./Form.css";
import { useState } from "react";

function FormItems() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formItems = [
    { label: "Name:", type: "text", id: "name", placeHolder: "John Doe" },
    {
      label: "Email:",
      type: "email",
      id: "email",
      placeHolder: "trevorlawrence@jags.com",
    },
    { label: "Phone:", type: "tel", id: "phone", placeHolder: "1234568970" },
  ];

  const validateForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setErrorMessage("");
    setIsSubmitted(true);
  };

  return (
    <>
      <div className={`form-container ${isSubmitted ? "hidden" : ""}`}>
        <form className="form" onSubmit={validateForm} noValidate>
          {formItems.map(({ label, type, id, placeHolder }) => (
            <div key={id} className="form-item">
              <label className="form-label">{label}</label>
              <input
                type={type}
                id={id}
                name={id}
                className="form-input"
                placeholder={placeHolder}
              />
            </div>
          ))}
          <div className="button-container">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
      <div className={`thank-you-container ${isSubmitted ? "" : "hidden"}`}>
        <span className="thanks-text">
          Thank you! We will reach out shortly.
        </span>
        <a href="">Submit again?</a>
      </div>
    </>
  );
}

export default FormItems;

import React, { useState } from 'react'
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Success } from "../assets/success.svg";

const ReferCard = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  function getLink() {
    setError(false)
    setSuccess(false)

    const regex = /\S+@\S+\.\S+/

    if(!email || !regex.test(email)) {
      setError(true)
    } else {
      setSuccess(true)
    }
  }

  return (
    <div className="refer-card">
      <h1>Refer friends and get rewards</h1>
      <p>
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>

      {error && <p className="error">Wrong email</p>}

      {success && (
        <div className="success-box">
          <Success />
          <p className="success">Your email is confirmed!</p>
        </div>
      )}

      <div className="refer-card-input">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email address"
        />
        <Email className="email-icon" />

        {success && 
          <button className="copy-btn">
            <h4>Copy</h4>
          </button>
        }

      </div>

      {!success && (
        <button onClick={getLink}>
          <h4>Get Referral Link</h4>
        </button>
      )}

      <p className="light-text">Limits on max rewards apply.</p>
    </div>
  );
}

export default ReferCard
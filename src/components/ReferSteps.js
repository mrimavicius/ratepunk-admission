import React from 'react'
import step1 from '../assets/invite.svg'
import step2 from '../assets/collect-coins.svg'
import step3 from '../assets/voucher.svg'

const ReferSteps = () => {
  return (
    <div className="refer-steps">
      <div className="refer-single-step">
        <img src={step1} alt="" />
        <div className="step-info">
          <h3>Step 1</h3>
          <h2>Invite friends</h2>
          <p>Refer friends with your unique referral link.</p>
        </div>
      </div>
      <div className="refer-single-step">
        <img src={step2} alt="" />
        <div className="step-info">
          <h3>Step 2</h3>
          <h2>Collect coins</h2>
          <p>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </p>
        </div>
      </div>
      <div className="refer-single-step">
        <img src={step3} alt="" />
        <div className="step-info">
          <h3>Step 3</h3>
          <h2>Get voucher</h2>
          <p>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReferSteps
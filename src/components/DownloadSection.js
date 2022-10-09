import React from 'react'
import '../styles/DownloadSection.scss';
import chrome from '../assets/chrome.svg'
import apple from '../assets/apple.svg'
import { ReactComponent as Star} from '../assets/star.svg'

const DownloadSection = () => {
  return (
    <div className="download-section">
      <div className="container">
        <div className="store">
          <a
            href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
            className="store-item"
          >
            <img src={chrome} alt="" />
            <div className="store-item-info">
              <p>available in the</p>
              <h4>chrome web store</h4>
            </div>
          </a>
          <a
            href="https://apps.apple.com/app/ratepunk/id1607823726"
            className="store-item"
          >
            <img src={apple} alt="" />
            <div className="store-item-info">
              <p>available in the</p>
              <h4>chrome web store</h4>
            </div>
          </a>
          <div className="store-item-stars">
            <Star fill="white" />
            <Star fill="white" />
            <Star fill="white" />
            <Star fill="white" />
            <Star fill="white" />
            <p>Chrome Store reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadSection
import React from 'react';

const footerLinks = (): JSX.Element => (
  <>
    <div style={{ textAlign: 'center', padding: '6px' }} className="footerLinks">
      <a href="https://www.facebook.com/pages/Apperson-Automotive/361511727202422">
        <i style={{ color: '#45c9ff' }} className="fab fa-facebook-square fa-2x" aria-hidden="true" />
      </a>
      <a href="https://www.yellowpages.com/salem-va/mip/apperson-automotive-482421530" style={{ marginLeft: '40px' }}>
        <img
          style={{ marginBottom: '15px', verticalAlign: 'middle' }}
          src="https://insightmg.com/wp-content/uploads/2015/12/YP_Insight-Marketing-Group_Marketing-for-Medical-Practices.png"
          alt="yellowpages"
          width="40px"
        />
      </a>
      <a href="https://www.yelp.com/biz/apperson-automotive-salem" style={{ marginLeft: '30px' }}>
        <img
          style={{ marginBottom: '15px', verticalAlign: 'middle' }}
          src="https://dl.dropboxusercontent.com/s/pb5qn5wyps6k56t/yelp-logo-icon-7.jpg?dl=0"
          alt="yelp"
          width="40px"
        />
      </a>
    </div>
    <div style={{ textAlign: 'center', padding: '6px' }}>
      <span className="nohover">
        Powered by &nbsp;
      </span>
      <a className="wjllc" target="_blank" rel="noopener noreferrer" href="https://www.web-jam.com">Web Jam LLC</a>
    </div>
  </>
);

const Footer = (): JSX.Element => (
  <div
    id="wjfooter"
    className="footer"
    style={{
      marginTop: '20px', paddingTop: '20px', paddingBottom: '20px', bottom: '0',
    }}
  >
    { footerLinks() }
  </div>
);

export default Footer;

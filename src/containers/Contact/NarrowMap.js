import React from 'react';

const NarrowMap = () => (
  <>
    <div className="material-content" elevation="0">
      <h4 style={{
        margin: 'auto', paddingTop: '30px', fontWeight: '700', fontSize: '16pt',
      }}
      >
        Contact Apperson Automotive of Salem, VA
      </h4>
      <div style={{ marginTop: '28px' }}>
        <p>
          Jim Hosey - Owner
          {' '}
          <a href="mailto:jhaminal@aol.com">jhaminal@aol.com</a>
          <br />
          Mitchell Sylveste - Owner
          {' '}
          <a href="mailto:z24racer1@aol.com">z24racer1@aol.com</a>
        </p>

        <p>
          1601 Apperson Drive
          <br />
          Salem,  VA  24153
          <br />
          <br />

          phone: 540-444-7337
          <br />
          fax: 540-444-7338
        </p>
        <p>
          <strong>Business Hours:</strong>
          <br />
          <br />
          Monday - Friday
          <br />
          7:30 am - 5:00 pm
        </p>

        <p>
          <strong>We accept:</strong>
          <br />
          Cash and Personal Checks
          <br />
          <img alt="Accepted Credit Cards" src="/static/imgs/creditCards.gif" />
          <br />
          Fleet Maintenance Cards
          <br />
          Extended
          Warranties Accepted
          <br />
          <br />
          Licensed and Insured
          <br />
        </p>
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://www.google.com/maps/place/1601+Apperson+Dr,+Salem,+VA+24153/@37.2715685,-80.
            0372942,17z/data=!4m15!1m9!4m8!1m0!1m6!1m2!1s0x884d0bbccbb8c4af:0x268cabd0f3897cb4!2s1601
            +Apperson+Dr,+Salem,+VA+24153!2m2!1d-80.0351055!2d37.
            2715685!3m4!1s0x884d0bbccbb8c4af:0x268cabd0f3897cb4!8m2!3d37.2715685!4d-80.0351055"
          >
            Get Directions
          </a>
        </div>
        <div elevation="0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.9940378426986!2d-80.
            03729418469676!3d37.271568479854174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x884d0bbccbb8c4af%3A0x268cabd0f3897cb4!2s1601+Apperson+Dr%2C+Salem%2C+VA
            +24153!5e0!3m2!1sen!2sus!4v1491346073417"
            width="300"
            height="300"
            frameBorder="0"
            style={{ border: '0', margin: 'auto', paddingRight: '3px' }}
            allowFullScreen
            title="Google Maps Directions"
          />
        </div>
      </div>
    </div>
  </>

);

export default NarrowMap;

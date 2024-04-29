import React from 'react';
import imageSrc3 from '../images/SEO/section.jpg';

const SEO = () => {
  return (
    <div>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',

          minHeight: '750px',
        }}
      >
        <div className="container">
          <div className="row">
            {/* Left Column - Heading and Paragraph */}
            <div className="col-md-6 mb-4">
              <h2 style={{ fontSize: '36px', fontFamily: 'Libre Baskerville', color: '#426B67', fontWeight: '500' }}>SEO </h2>
              <p style={{ color: '#426B67', fontSize: '25px', }}>
                Our Search Engine Optimization (SEO) services ensure that our client’s website is effectively equipped to gain higher website traffic and ranking in search engines
              </p>
            </div>
            {/* Right Column - Image */}
            <div className="col-md-6 mb-4">
              <img
                src={imageSrc3}
                alt="Service Section Iage"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}

      
      <section style={{ paddingBottom: '100px' }}>
  <div className="container">
    {/* First Row */}
    <div className="row">
      {/* First Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ boxShadow: '0 5px 20px #5C4033', borderRadius: '20px', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Content Analysis</h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>A readable content which is furnished with multiple on-page optimization factors helps in achieving a higher page rank in the search engines.</h5>
        </div>
      </div>
      {/* Second Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ boxShadow: '0 5px 20px #5C4033', borderRadius: '20px', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>PPC Management</h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Pay Per Click (PPC) is an internet marketing model which is built around the concept of placing paid ads</h5>
        </div>
      </div>
      {/* Third Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ boxShadow: '0 5px 20px #5C4033', borderRadius: '20px', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Link Building</h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Link Building is an internet marketing process that involves obtaining website traffic through links on other pages.</h5>
        </div>
      </div>
    </div>

    {/* Second Row */}
    <div className="row">
      {/* Fourth Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ boxShadow: '0 5px 20px #5C4033', borderRadius: '20px', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Social Media </h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Social Media Optimization (SMO) makes use of several social media platforms to market your product</h5>
        </div>
      </div>
      {/* Fifth Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ boxShadow: '0 5px 20px #5C4033', borderRadius: '20px', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Reputation Management</h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>In today’s digitized world, customer feedback on an online platform plays a massive role in determining the reputation</h5>
        </div>
      </div>
      {/* Sixth Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ boxShadow: '0 5px 20px #5C4033', borderRadius: '20px', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Keyword Research</h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Our extensive research, coupled with intensive analysis, ensures that your website is equipped</h5>
        </div>
      </div>
    </div>

    {/* Third Row */}
    <div className="row">
      {/* Seventh Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ boxShadow: '0 5px 20px #5C4033', borderRadius: '20px', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Local SEO</h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Social Media Optimization (SMO) makes use of several social media platforms to market your product</h5>
        </div>
      </div>
      {/* Eighth Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ boxShadow: '0 5px 20px #5C4033', borderRadius: '20px', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>On page Optimization</h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Critical factors such as keyword density, Meta tags, page content, headers and footers, and others need to be carefully</h5>
        </div>
      </div>
      {/* Ninth Column */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="box" style={{ borderRadius: '20px', boxShadow: '0 5px 20px #5C4033', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', height: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>Site Speed & Internal Linking</h2>
          <h5 style={{ textAlign: 'center', color: '#426B67', fontFamily: 'Libre Baskerville' }}>While fast, accessible sites are ranked high in popular search engines.</h5>
        </div>
      </div>
    </div>
  </div>
</section>





      <section style={{ padding: '50px 0', backgroundColor: '#e3e5e8' }}>
        <div className="container">
          <div className="row">
            {/* First Column - Paragraph */}
            <div className="col-md-4 mb-4" style={{
              paddingTop: '80px', paddingRight: '100px',
              fontWeight: 'bold', color: 'white'
            }}>
              <p>
                We are a software development and consulting company. Our experience in providing successful website and Apps development, backend web programming, ecommerce software development services and maintenance of sophisticated internet applications for different industries helps us create user friendly solutions.
              </p>
            </div>

            {/* Second Column - Contact Form */}
            <div className="col-md-4 mb-4">
              <h3 style={{ color: '#426B67' }}>Contact Us</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input type="text" className="form-control" id="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="service"></label>
                  <select className="form-control" id="service" placeholder="Service">
                    <option value="">Digital Marketing </option>
                    <option value="service1">App Development</option>
                    <option value="service2">Web Development</option>
                  </select>
                </div>
                <br />
                <button type="submit" className="btn btn-primary"
                  style={{
                    backgroundColor: '#00A898', width: '100%',
                    paddingTop: '15px', fontWeight: 'bold'
                  }}>SEND</button>
              </form>
            </div>
            <div className="col-md-4 mb-4" style={{ paddingTop: '0px', paddingLeft: '80px' }}>
              <h3 style={{ color: '#426B67' }} >Contact Info</h3>
              <p style={{ paddingTop: '150px', fontWeight: 'bold' }}> +966 804-501-8185</p>
              <p style={{ fontWeight: 'bold' }}> +966-936-3978</p>
              <p style={{ fontWeight: 'bold', paddingTop: '60px' }}>info@modernsolution.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;

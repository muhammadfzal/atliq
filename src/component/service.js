/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import backgroundImage from '../images/Front End/home-bnner1.jpg';
import imageSrc2 from '../images/Service/service-section2-copy.jpg'
import imageSrc3 from '../images/SEO/seonew.jpg'
import imageSrc1 from '../images/Service/service-section.815.jpg'
import '../index.css'

const Service = () => {
  return (
    <div>

      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          padding: '100px 0', // Reduce padding for smaller screens
          minHeight: '500px', // Adjust min-height for smaller screens
        }}>

      </section>

      <section className="d-flex align-items-center" style={{ minHeight: '750px', paddingTop: "10%" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2 className=" fw-normal" style={{ fontSize: '36px', fontFamily: 'Libre Baskerville', color: '#426B67' }}>
                Front End UI/UX design for Web and Mobile Apps
              </h2>
              <p style={{ fontSize: '25px', color: '#426B67' }}>
                User Experience (UX) plays a huge role in striking a chord with the customer who
                visits the website. An appealing and vibrant User Interface (UI) improves the possibility of
                an increased user engagement and ascertaining the brand’s
                authenticity among the customers. It also helps in improving the brand value.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <img
                src={imageSrc1}
                alt="Service Section Image"
                className="img-fluid pe-md-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
        }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-md-6 mb-4 ">
              <img
                src={imageSrc2}
                alt="Service Section Imge"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6 mb-4" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
              <h2 style={{
                fontSize: '36px', fontFamily: 'Libre Baskerville', color: '#426B67'
              }}>Systems Development and Integration</h2>
              <p style={{
                color: '#426B67', fontSize: '25px'
              }}>
                It is a prerequisite for any business nowadays to be able to manage its data effectively.
                Hence, an efficient and secure database design coupled with its integration is of the utmost importance. Also, being accessible to the customers on the mobile front through captivating Mobile Apps can do a
                great deal to keep a business up and running in the modern day competitive world.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* <section
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '750px',
        }}
      >
        <div className="container">
          <div className="row" style={{

          }}>
            <div className="col-md-6 mb-4" style={{ marginBottom: '20px' }}>
              <h2 style={{
                fontSize: '36px',
                fontFamily: 'Libre Baskerville',
                color: '#426B67',
                fontWeight: '500',

              }}>
                SEO & Digital Marketing</h2>
              <p style={{ color: '#426B67', fontSize: '25px', marginBottom: '20px' }}>
                Optimizing a website for search engines is absolutely essential for
                any business to gain a strong foothold in the virtual world. SEO, by helping achieve
                a higher page rank, enables the website to garner targeted traffic organically. Digital Marketing, on the other hand, makes a business reach wider range of audience by increasing the
                visibility on social media platforms like Facebook and Twitter.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <img
                src={imageSrc3}
                alt="Service Section Imge"
                style={{ maxWidth: '100%', height: 'auto', paddingLeft: '50px' }}
              />
            </div>
          </div>
        </div>
      </section> */}

<section className="d-flex align-items-center" style={{ minHeight: '750px' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <h2 className="text-custom" style={{ fontSize: '36px', fontFamily: 'Libre Baskerville', fontWeight: '500',  color: '#426B67'}}>
              SEO & Digital Marketing
            </h2>
            <p className="text-custom" style={{ fontSize: '25px', marginBottom: '20px' ,color: '#426B67'}}>
              Optimizing a website for search engines is absolutely essential for
              any business to gain a strong foothold in the virtual world. SEO, by helping achieve
              a higher page rank, enables the website to garner targeted traffic organically. Digital Marketing, on the other hand, makes a business reach a wider range of audiences by increasing the
              visibility on social media platforms like Facebook and Twitter.
            </p>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src={imageSrc3}
              alt="Service Section Image"
              className="img-fluid pe-md-5" // Ensures the image is responsive and adds right padding on medium screens and above
            />
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

            {/* Third Column - Contact Info */}
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
export default Service;

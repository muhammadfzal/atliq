import React from 'react';
import backgroundImage from '../images/system development/frontend-banner-copy.jpg';
import imageSrc2 from '../images/system development/frontend-section2-copy.jpg'
import imageSrc3 from '../images/system development/frontend-section1-copy.jpg'
import '../index.css'
import logo from '../images/logo/1.avif'

const FrontEnd = () => {
  return (
    <div>

      <section style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      
        minHeight: '300px',

      }}>
      </section>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '550px',
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
                Database Design and Integration</h2>
              <p style={{ color: '#426B67', fontSize: '25px', marginBottom: '20px' }}>
                Efficient and secure database design and integration are vital for modern businesses as they enable optimal data management and robust security, ensuring scalable, flexible solutions that seamlessly integrate with existing systems
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <img
                src={imageSrc3}
                alt="Service Section Imge"
                style={{ maxWidth: '95%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
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
                style={{ maxWidth: '95%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              />
            </div>
            <div className="col-md-6 mb-4" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
              <h2 style={{
                fontSize: '36px', fontFamily: 'Libre Baskerville', color: '#426B67'
              }}>Mobile App Development</h2>
              <p style={{
                color: '#426B67', fontSize: '25px'
              }}>
                Mobile apps keep businesses competitive and accessible by offering user-friendly interfaces and cross-platform compatibility, ensuring seamless integration with business processes and a strong focus on customer engagement
              </p>
            </div>

          </div>
        </div>
      </section>
    

  <section className="">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div style={circleStyle}></div>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          fontFamily: 'Libre Baskerville',
          color: '#426B67',
          fontWeight: '500',
        }}>Requirements</h2>
        <h5 style={{
          textAlign: 'center',
          fontSize: '26px',
          fontFamily: 'Libre Baskerville',
          color: '#426B67',
          fontWeight: '500',
        }}>
          User-focused, intuitive, consistent, accessible, responsive,
          aesthetic, and functional design.
        </h5>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div style={circleStyle}></div>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          fontFamily: 'Libre Baskerville',
          color: '#426B67',
          fontWeight: '500',
        }}>UX/UI Design</h2>
        <h5 style={{
          textAlign: 'center',
          fontSize: '26px',
          fontFamily: 'Libre Baskerville',
          color: '#426B67',
          fontWeight: '500',
        }}>
          Understanding users, intuitive design, visually appealing,
          accessible, and responsive.
        </h5>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div style={circleStyle}></div>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          fontFamily: 'Libre Baskerville',
          color: '#426B67',
          fontWeight: '500',
        }}>Visual Design</h2>
        <h5 style={{
          textAlign: 'center',
          fontSize: '26px',
          fontFamily: 'Libre Baskerville',
          color: '#426B67',
          fontWeight: '500',
        }}>
          Aesthetically pleasing, cohesive, functional,
          engaging, and user-centric graphic presentation.
        </h5>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div style={circleStyle}></div>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          fontFamily: 'Libre Baskerville',
          color: '#426B67',
          fontWeight: '500',
        }}>App Design QW Testing</h2>
        <h5 style={{
          textAlign: 'center',
          fontSize: '26px',
          fontFamily: 'Libre Baskerville',
          color: '#426B67',
          fontWeight: '500',
        }}>
          Ensuring functionality, usability, compatibility, and performance of app through testing.
        </h5>
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
                    <option value=""> Digital Marketing </option>
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

const circleStyle = {
  width: '170px',
  height: '50px',
  borderRadius: '50%',
  paddingTop: '10%',
  margin: '0 auto 10px',
  backgroundImage: logo,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  border: '1px , red'


};

export default FrontEnd;

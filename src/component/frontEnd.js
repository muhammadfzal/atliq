import React from 'react';
import backgroundImage from '../images/Front End/home-bnner1.jpg';
import imageSrc2 from '../images/Front End/section2.avif'
import imageSrc3 from '../images/Front End/section1-copy.jpg'
import '../index.css'

const FrontEnd = () => {
  return (
    <div>

      <section style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        padding: '500px 0',
        minHeight: '750px',



      }}>

      </section>

      <section
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
                Web Design</h2>
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
              }}>App Design</h2>
              <p style={{
                color: '#426B67', fontSize: '25px'
              }}>
                A coherent, user-friendly User Interface (UI) that helps in incorporating all the
                features required for a pleasurable end User Experience (UX) is one of the key
                aspects in building a mobile app that successfully keeps the users engaged.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section style={{ paddingTop: '6%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '6%' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, margin: '0 10px' }}>
            <div style={circleStyle}></div>
            <h2 style={{
              paddingLeft: '70px', paddingTop: '10%', fontSize: '36px',
              fontFamily: 'Libre Baskerville',
              color: '#426B67',
              fontWeight: '500',
            }}>Requirements </h2>
            <h5 style={{
              paddingLeft: '70px', paddingTop: '10%', fontSize: '26px',
              fontFamily: 'Libre Baskerville',
              color: '#426B67',
              fontWeight: '500',
            }}>User-focused, intuitive, consistent, accessible, responsive,
              aesthetic, and functional design.</h5>
          </div>
          <div style={{ flex: 1, margin: '0 10px' }}>
            <div style={circleStyle}></div>
            <h2 style={{
              paddingLeft: '70px', paddingTop: '10%', fontSize: '36px',
              fontFamily: 'Libre Baskerville',
              color: '#426B67',
              fontWeight: '500',
            }}>UX/UI Design</h2>
            <h5 style={{
              paddingLeft: '70px', paddingTop: '10%', fontSize: '26px',
              fontFamily: 'Libre Baskerville',
              color: '#426B67',
              fontWeight: '500',
            }}>Understanding users, intuitive design, visually appealing,
              accessible, and responsive.</h5>
          </div>
          <div style={{ flex: 1, margin: '0 10px' }}>
            <div style={circleStyle}></div>
            <h2 style={{
              paddingLeft: '70px', paddingTop: '10%', fontSize: '36px',
              fontFamily: 'Libre Baskerville',
              color: '#426B67',
              fontWeight: '500',
            }}>Visual Design</h2>
            <h5 style={{
              paddingLeft: '70px', paddingTop: '10%', fontSize: '26px',
              fontFamily: 'Libre Baskerville',
              color: '#426B67',
              fontWeight: '500',
            }}>Aesthetically pleasing, cohesive, functional,
              engaging, and user-centric graphic presentation.</h5>
          </div>
          <div style={{ flex: 1, margin: '0 10px' }}>
            <div style={circleStyle}></div>
            <h2 style={{
              paddingLeft: '70px', paddingTop: '10%', fontSize: '36px',
              fontFamily: 'Libre Baskerville',
              color: '#426B67',
              fontWeight: '500',
            }}>App Design QW Testing</h2>
            <h5 style={{
              paddingLeft: '70px', paddingTop: '0%', fontSize: '26px',
              fontFamily: 'Libre Baskerville',
              color: '#426B67',
              fontWeight: '500',
            }}>Ensuring functionality, usability, compatibility, and performance of app through testing.</h5>
          </div>
        </div>
      </section>
      <section style={{ padding: '50px 0', backgroundColor: '#e3e5e8' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4" style={{
              paddingTop: '80px', paddingRight: '100px',
              fontWeight: 'bold', color: 'white'
            }}>
              <p>
                We are a software development and consulting company. Our experience in providing successful website and Apps development, backend web programming, ecommerce software development services and maintenance of sophisticated internet applications for different industries helps us create user friendly solutions.
              </p>
            </div>
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

const circleStyle = {
  width: '170px',
  height: '190px',
  backgroundColor: '#FFFFFF',
  borderRadius: '50%',
  paddingTop: '10%',
  margin: '0 auto 10px',
  border: '1px dotted #000',
};

export default FrontEnd;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import backgroundImage from '../images/d5912a552b793d16ecc86a74be8d82937c34052d2ef91b2e3cc1f6d47d46dc53.avif';

const Home = () => {

  const navigate = useNavigate()

  const handleFrontEnd = () => {
    navigate('/front-end')
  }

  const handleSystemDevelopment = () => {
    navigate('/system-development')
  }
  const handleSeo = () => {
    navigate('/seo')
  }

  return (

    <div>

      <section style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        padding: '50px 0',
        minHeight: '750px',



      }}>
        <div className="container text-center" style={{ paddingTop: '70px' }}>
          <h1 style={{ color: 'white', fontSize: '70px', fontFamily: 'Libre Baskerville', }}> Transforming your ideas into </h1> <br />
          <h1 style={{ color: 'white', fontSize: '70px', fontFamily: 'Libre Baskerville', }}> innovative solutions </h1> <br />
          <h2 style={{ color: 'white', fontFamily: 'arial', paddingBottom: '7%' }}>A full stack venture studio that provide end-to-end technical and marketing solutions specializing
            in helping startups scale and optimize.</h2>
          <Button style={{ backgroundColor: '#426B67', fontFamily: 'arial', height: '50px', width: '250px' }}>GET IN TOUCH</Button>
        </div>
      </section>
      <section style={{ marginTop: '50px', textAlign: 'center', padding: '140px' }}>
        <div className="container">
          <div className="row" style={{ color: '#426B67' }}>
            <div className="col">
              <h2>Front End UI/UX Design for Web and Mobile Apps</h2>
              <h5>User Experience (UX) plays a huge role in striking a chord
                with the customer who visits</h5>
              <Button style={{ color: '#426B67', background: 'transparent', border: 'none', fontSize: '20px' }} onClick={handleFrontEnd}>Learn More</Button>
            </div>
            <div className="col">
              <h2>System Development and Integrations</h2>
              <h5>It is a prerequisite for any business nowadays to
                be able to manage its data effectively.</h5>
              <Button style={{ color: '#426B67', background: 'transparent', border: 'none', fontSize: '20px' }} onClick={handleSystemDevelopment}>Learn More</Button>
            </div>
            <div className="col">
              <h2>SEO and Digital Marketing</h2> <br />
              <h5>Optimizing a website for a search engine is a
                prerequisite for any
                business to gain a strong foothold in the virtual world. SEO</h5>
              <Button style={{ color: '#426B67', background: 'transparent', border: 'none', fontSize: '20px' }} onClick={handleSeo}>Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#426B67', padding: '120px' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>What We Offer</h1>
          <h4 style={{ color: 'white' }}>We are a full stack venture studio providing comprehensive technical and marketing solutions to help startups scale their operations across various sectors including Fintech, Healthtech, E-commerce, and more.</h4>
        </div>
        <div className="row" style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '90px' }}>
          <div className="col-md-4 mb-5">
            <h2 style={{ borderBottom: '5px solid white', paddingBottom: '15px', color: 'white', textAlign: "center", width: '80%' }}>Ideation/Prototyping</h2>
            <ul style={{ padding: '20px', color: 'white' }}>
              <li>
                <h5> UI/UX</h5>
                <ul>
                  <li>Enhancing user satisfaction through intuitive interfaces</li>

                </ul>
              </li>
              <li>
                <h5>  Research & Testing</h5>
                <ul>
                  <li>From concept to execution, validating with precision</li>

                </ul>
              </li>
              <li > <h5>Product Development</h5> </li>
              <ul> <li>Transforming your ideas into exceptional products</li></ul>
            </ul>
          </div>
          <div className="col-md-4 mb-5">
            <h2 style={{ borderBottom: '5px solid white', paddingBottom: '15px', color: 'white', textAlign: "center", width: '80%' }}>Development</h2>
            <ul style={{ padding: '20px', color: 'white' }}>
              <li>
                <h5> Application Development</h5>
                <ul>
                  <li>Developing Web, iOS, and Android applications as per requirment</li>

                </ul>
              </li>
              <li> <h5> Website Management</h5></li>
              <ul>   <li>From updates to security, everything is covered</li></ul>
              <li> <h5>Software Development</h5></li>
              <ul>
                <li>
                  Software that scales, performs, and exceeds expectations
                </li>
              </ul>
              <li> <h5>Product Management</h5></li>
              <ul>
                <li>
                  Redefining product success with our dedicated product management approach
                </li>
              </ul>
            </ul>


          </div>
          <div className="col-md-4 mb-5">
            <h2 style={{ borderBottom: '5px solid white', paddingBottom: '15px', color: 'white', textAlign: "center", width: '80%' }}>Startegy</h2>
            <ul style={{ padding: '20px', color: 'white' }}>
              <li>
                <h5> Technical Strartegy</h5>
                <ul>
                  <li>Strategic technology planning for a future-proof business</li>

                </ul>
              </li>
              <li> <h5>Data Startegy</h5></li>
              <ul>   <li>Turning data into your most valuable asset with our strategic expertise</li></ul>
              <li> <h5>Productive Analytics</h5></li>
              <ul>
                <li>
                  Turning Data into Foresight
                </li>
              </ul>
              <li> <h5>visualizations and Reporting</h5></li>
              <ul>
                <li>
                  Turning complex data into clear insights through captivating visualizations
                </li>
              </ul>
            </ul>


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

export default Home;

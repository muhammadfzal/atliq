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

<section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        padding: '50px 0',
        minHeight: '750px',
      }}
    >
      <div className="container text-center" style={{ paddingTop: '5vh' }}>
        <h1
          style={{
            color: 'white',
            fontSize: 'clamp(4rem, 8vw, 8rem)', // Responsive font size using clamp()
            fontFamily: 'Libre Baskerville',
            marginBottom: '1rem',
          }}
        >
          Transforming your ideas into innovative solutions
        </h1>
        <h2
          style={{
            color: 'white',
            fontFamily: 'Arial',
            paddingBottom: '3vh',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', // Responsive font size using clamp()
          }}
        >
          A full stack venture studio that provides end-to-end technical and marketing solutions specializing in helping startups scale and optimize.
        </h2>
        <Button
          style={{
            backgroundColor: '#426B67',
            fontFamily: 'Arial',
            height: '10%',
            width: '20vw', // Responsive button width
            fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Responsive font size using clamp()
          }}
          // onClick={handleGetInTouch}
        >
          GET IN TOUCH
        </Button>
      </div>
    </section>
    <section style={{ marginTop: '5vh', textAlign: 'center', padding: '10vw 0' }}>
  <div className="container">
    <div className="row" style={{ color: '#426B67' }}>
      <div className="col-md-4 mb-4">
        <h2 style={{ fontSize: '3vw' }}>Front End UI/UX Design</h2>
        <h5 style={{ fontSize: '1.5vw' }}>User Experience (UX) is crucial for customer engagement.</h5>
        <Button
          style={{ color: '#426B67', background: 'transparent', border: 'none', fontSize: '1.5vw', marginTop: '2vh' }}
          onClick={handleFrontEnd}
        >
          Learn More
        </Button>
      </div>
      <div className="col-md-4 mb-4">
        <h2 style={{ fontSize: '3vw' }}>System Development</h2>
        <h5 style={{ fontSize: '1.5vw' }}>Efficient data management is essential for businesses.</h5>
        <Button
          style={{ color: '#426B67', background: 'transparent', border: 'none', fontSize: '1.5vw', marginTop: '2vh' }}
          onClick={handleSystemDevelopment}
        >
          Learn More
        </Button>
      </div>
      <div className="col-md-4 mb-4">
        <h2 style={{ fontSize: '3vw' }}>SEO and Digital Marketing</h2>
        <h5 style={{ fontSize: '1.5vw' }}>SEO is vital for gaining visibility online.</h5>
        <Button
          style={{ color: '#426B67', background: 'transparent', border: 'none', fontSize: '1.5vw', marginTop: '2vh' }}
          onClick={handleSeo}
        >
          Learn More
        </Button>
      </div>
    </div>
  </div>
</section>


    <section style={{ backgroundColor: '#426B67', padding: '5vw' }}>
  <div className="container text-center">
    <h1 style={{ color: 'white' }}>What We Offer</h1>
    <h4 style={{ color: 'white', fontSize: '1.5rem' }}>
      We are a full stack venture studio providing comprehensive technical and marketing solutions to help startups scale their operations across various sectors including Fintech, Healthtech, E-commerce, and more.
    </h4>
  </div>
  <div className="row justify-content-center" style={{ paddingTop: '5vw' }}>
    <div className="col-lg-4 col-md-6 mb-5 text-center">
      <h2 style={{ borderBottom: '5px solid white', paddingBottom: '1rem', color: 'white', width: '80%', margin: 'auto' }}>Ideation/Prototyping</h2>
      <ul style={{ padding: '20px', color: 'white', textAlign: 'left' }}>
        <li>UI/UX
          <ul style={{ paddingLeft: '20px' }}>
            <li>Enhancing user satisfaction through intuitive interfaces</li>
          </ul>
        </li>
        <li>Research & Testing
          <ul style={{ paddingLeft: '20px' }}>
            <li>From concept to execution, validating with precision</li>
          </ul>
        </li>
        <li>Product Development
          <ul style={{ paddingLeft: '20px' }}>
            <li>Transforming your ideas into exceptional products</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-6 mb-5 text-center">
      <h2 style={{ borderBottom: '5px solid white', paddingBottom: '1rem', color: 'white', width: '80%', margin: 'auto' }}>Development</h2>
      <ul style={{ padding: '20px', color: 'white', textAlign: 'left' }}>
        <li>Application Development
          <ul style={{ paddingLeft: '20px' }}>
            <li>Developing Web, iOS, and Android applications as per requirement</li>
          </ul>
        </li>
        <li>Website Management
          <ul style={{ paddingLeft: '20px' }}>
            <li>From updates to security, everything is covered</li>
          </ul>
        </li>
        <li>Software Development
          <ul style={{ paddingLeft: '20px' }}>
            <li>Software that scales, performs, and exceeds expectations</li>
          </ul>
        </li>
        <li>Product Management
          <ul style={{ paddingLeft: '20px' }}>
            <li>Redefining product success with our dedicated approach</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-6 mb-5 text-center">
      <h2 style={{ borderBottom: '5px solid white', paddingBottom: '1rem', color: 'white', width: '80%', margin: 'auto' }}>Strategy</h2>
      <ul style={{ padding: '20px', color: 'white', textAlign: 'left' }}>
        <li>Technical Strategy
          <ul style={{ paddingLeft: '20px' }}>
            <li>Strategic technology planning for a future-proof business</li>
          </ul>
        </li>
        <li>Data Strategy
          <ul style={{ paddingLeft: '20px' }}>
            <li>Turning data into your most valuable asset with our strategic expertise</li>
          </ul>
        </li>
        <li>Productive Analytics
          <ul style={{ paddingLeft: '20px' }}>
            <li>Turning Data into Foresight</li>
          </ul>
        </li>
        <li>Visualizations and Reporting
          <ul style={{ paddingLeft: '20px' }}>
            <li>Turning complex data into clear insights through captivating visualizations</li>
          </ul>
        </li>
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
      <section style={{ padding: '50px 0', backgroundColor: '#e3e5e8' }}>
</section>

    </div>
  );
};

export default Home;

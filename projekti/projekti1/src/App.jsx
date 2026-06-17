import { useState } from 'react'
import footer from './components/footer'
import logo1 from './fotot/logo1.png' // Import it here
import javascript1 from './fotot/javascript1.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <section class="hero-container">
  <div class="glass-panel">
    <div class="text-side">
      <span class="badge">Front-End Duo</span>
      <h1>We turn designs into <span class="gradient-text">fluid reality.</span></h1>
      {/* <p>A specialized front-end team building high-performance code. No fluff—just pixel-perfect execution.</p> */}
      
      <div class="duo-stats">
        <div class="stat-item"><strong>2</strong> Developers</div>
        <div class="stat-item"><strong>100%</strong> Javascript</div>
      </div>
    </div>
    
    <div class="logo-side">
       <img src={logo1} alt="" class="floating-logo"/>
    </div>
  </div>
</section>



<div className="logo">
         {/* Use the imported variable name in curly braces */}
         <img src={javascript1} alt="" style={{width: '100%'}} />
         <div className='tekstilogo'>
          {/* <h1>Welcome to our website!</h1> */}
         </div>
      </div>








     <div class="project-card">
  <div class="card-content">
    <div class="card-header">
      <span class="tag">E-Commerce</span>
      <div class="status">
        <span class="pulse-dot"></span> Live
      </div>
    </div>
    
    <div class="image-container">
      <img src="https://via.placeholder.com/600x400" alt="Project Preview"/>
    </div>

    <div class="card-body">
      <h3>Nexus Dashboard</h3>
      <p>A high-performance analytics interface built for real-time data tracking and visualization.</p>
      
      <div class="tech-stack">
        <span>React</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>Framer Motion</span>
      </div>
    </div>

    <div class="card-footer">
      <a href="#" class="btn-primary">View Project</a>
      <a href="#" class="btn-secondary">GitHub</a>
    </div>
  </div>
</div>
      
       <div class="project-card1">
  <div class="card-content1">
    <div class="card-header1">
      <span class="tag1">E-Commerce</span>
      <div class="status1">
        <span class="pulse-dot"></span> 
      </div>
    </div>
    
    <div class="image-container">
      <img src="https://via.placeholder.com/600x400" alt="Project Preview"/>
    </div>

    <div class="card-body1">
      <h3>Nexus Dashboard</h3>
      <p>A high-performance analytics interface built for real-time data tracking and visualization.</p>
      
      <div class="tech-stack1">
        <span>React</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>Framer Motion</span>
      </div>
    </div>

    <div class="card-footer1">
      <a href="#" class="btn-primary">View Project</a>
      <a href="#" class="btn-secondary">GitHub</a>
    </div>
  </div>
</div>



 <div class="project-card2">
  <div class="card-content2">
    <div class="card-header2">
      <span class="tag2">E-Commerce</span>
      <div class="status2">
        <span class="pulse-dot"></span> Live
      </div>
    </div>
    
    <div class="image-container">
      <img src="https://via.placeholder.com/600x400" alt="Project Preview"/>
    </div>

    <div class="card-body2">
      <h3>Nexus Dashboard</h3>
      <p>A high-performance analytics interface built for real-time data tracking and visualization.</p>
      
      <div class="tech-stack2">
        <span>React</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>Framer Motion</span>
      </div>
    </div>

    <div class="card-footer2">
      <a href="#" class="btn-primary">View Project</a>
      <a href="#" class="btn-secondary">GitHub</a>
    </div>
  </div>
</div>

















<footer className="footer-container">
      <div className="footer-content centered">
        
        <div className="link-group">
    {/* <h4>Specialties</h4> */}
    <p className="specialty-item">Turning 'What if?'</p>
       <p>into 'What's next?'</p>
    
  </div>
        
        
        
        
        
        
        <div className="footer-brand">
          <h2 className="footer-logo">EDI <span className="gradient-text">TECH</span></h2>
          <p>Programming | Development | Innovation</p>
        </div>

        {/* <div className="footer-links">
          <div className="link-group">
            <h4>Navigation</h4>
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About Us</a>
          </div> */}
          <div className="link-group">
            <h4>Connect</h4>
            <div className="social-icons">
    <a href="#" className="social-link instagram">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
    </a>
    <a href="#" className="social-link facebook">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
    </a>
    <a href="#" className="social-link whatsapp">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
    </a>
  </div>
          </div>
        {/* </div> */}
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EDI TECH. All rights reserved.</p>
        <p className="made-by">Built with 100% JavaScript by Two Devs.</p>
      </div>
    </footer>

         
    </>
  )
}

export default App
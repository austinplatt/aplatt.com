// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Navbar from './Navbar';
import './App.css';

const Home = () => (
  <div>
    <h1>Welcome, I am Austin Platt</h1>
    <br />
    <p className="centered-text">I am a fullstack developer, currently working with React, NextJS, and NodeJS.</p>
    <p className="centered-text">Check out my recent projects and social media.</p>
  </div>
);

const About = () => (
  <div>
    <h1>About Me</h1>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <img src="/AustinPlatt.JPG" alt="PlatinumPlatt" className="image-style"/>
      <section style={{ marginLeft: '20px', marginTop: '-2px' }}> 
        <p className="about-text">My name is Austin Platt, I grew up in Tacoma, WA and I recently graduated from Boise State University with a degree in computer 
          science this past December. I have been exploring my options as to what my post-grad goal is career-wise, but I know I want it to 
          involve technology. I’ve realized my passion for technology through the endless possibilities and transformative impact that it has 
          in our world. I recognized this passion in my previous position at Boise State as a technical support specialist at OIT. In this 
          role, I provided essential client support for all desktop-based software applications, hardware configurations, and system analysis. 
          The role involved troubleshooting software issues, configuring operating systems and software applications, and ensuring integration 
          within the university's network. I also conduct research on product updates and patches, maintain communication with university 
          departments and external vendors to deliver effective technical solutions, and contribute to tasks such as software testing, anti-virus 
          management, and server maintenance. Additionally, I collaborated with a team which has not only affirmed my passion for this work but 
          also inspired me. My senior TSS team constantly boasts their love for their job and it’s overall great to work under such enthusiastic 
          leadership.</p>
        <br />
        <p className="about-text1">In my previous role as a full stack developer, I was able to successfully apply all the knowledge and skills that I obtained during 
          undergrad to complete the task at hand, as well as learned a lot to better my front/back-end development. My last role involved the total 
          reconstruction of the user interface of PeerAssessment.com. How peer assessment works is once you have completed a group activity within 
          a course at a university, a peer assessment form will be sent to you requiring you to assess yourself and your team members performance. 
          Based on your recorded responses, a grade will be given to you and the team members. How they presented the data to the course instructor 
          at first was in an excel spreadsheet with all the data in tables but we created google visualization charts, as well as an algorithm that 
          takes the recorded responses and puts them within the charts. We specifically used heat maps to show the specific team members score 
          performance based on the color (red, yellow, green). This is only viewable on the instructor's assigned interface and this implementation 
          of the charts instead of raw data makes it easier for the instructor to give grades based on performance. This project was very rewarding 
          as many Universities across the country utilize this feedback tool and having something that I helped in creating put into production in 
          my eyes is deemed as a success. I am really passionate about web development as it is gives you the opportunity to create something visually, 
          instantaneously, and interactively. </p>
        <br />
        <p className="about-text1">I am currently open to exploring exciting opportunities in the fields of full-stack development, web development, software 
        engineering, software development, and IT engineering.  If you have a position that aligns with my expertise and enthusiasm, I would love to connect 
        and discuss how I can bring value to your organization. </p>
      </section>
    </div>
  </div>
);

const Resume = () => (
  <div>
    <h1>My Resume</h1>
    <section>
      <h2 className="section-header">EDUCATION</h2>
      <hr className="section-line" />
      <h3 className="section-subheader"> BOISE STATE UNIVERSITY - BOISE, ID | December 2023</h3>
       <p className="section-major"> Bachelor of Computer Science | Cum Laude
      </p>
    </section>

    <section>
      <h2 className="section-header">WORK EXPERIENCE</h2>
      <hr className="section-line" />
      <h3 className="section-subheader">PEERASSESSMENT.COM - BOISE, ID | August 2023 - December 2023</h3>
      <p className="section-jobtitle">Full Stack Developer</p>
      <ul>
        <li>Spearheaded the enhancement of PeerAssessment.com, transforming static data reports into dynamic visualizations for actionable insights.</li>
        <li>Developed a separate data visualization module using JavaScript, PHP, and the Google Visualization API, optimizing the interpretation of assessment data.</li>
        <li>Collaborated with Thrive Web Designs to seamlessly integrate the visualization module into the existing PA system, ensuring a cohesive user experience.</li>
        <li>Proposed and implemented a stretch goal to integrate instructor feedback and grading directly into the module, streamlining the grading process for individual student team members.</li>
      </ul>
      <h3 className="section-subheader"> BOISE STATE UNIVERSITY OFFICE OF INFORMATION TECHNOLOGY | November 2021 - December 2023</h3>
      <p className="section-jobtitle">Technology Support Specialist</p>
      <ul>
        <li>Provided essential client support for all desktop-based software applications, hardware configurations, and system analysis.</li>
        <li>Conducted troubleshooting of software issues, configured operating systems, and software applications.</li>
        <li>Ensured integration within the university's network for seamless functionality.</li>
        <li>Conducted research on product updates and patches to stay informed about the latest developments.</li>
        <li>Design, develop, customize, and enhance web-based programs and reports.</li>
        <li>Maintained communication with university departments and external vendors to deliver effective technical solutions.</li>
        <li>Contributed to tasks such as software testing, anti-virus management, and server maintenance.</li>
      </ul>
      <h3 className="section-subheader">CITY OF FIFE PUBLIC WORKS - FIFE, WA | May 2020 - August 2023</h3>
      <p className="section-jobtitle">Grounds Crew Member</p>
      <ul>
        <li>Collaborate with the city superintendent to design new processes for effective groundskeeping and public support.</li>
        <li>Operate all motorized vehicles and equipment safely.</li>
        <li>Clean and maintain public spaces by disposing of litter.</li>
        <li>Provide assistance and support to the public to ensure safety and city satisfaction.</li>
        <li>Maintain city landscaping and keep sidewalks clear.</li>
      </ul>
      <h3 className="section-subheader"> BOISE STATE UNIVERSITY CAMPUS RECREATION | January 2021 - November 2021</h3>
      <p className="section-jobtitle">Membership Services Attendant</p>
      <ul>
        <li>Greet recreation members and provide a positive customer experience with fair, friendly, and courteous service.</li>
        <li>Oversee the facility to guarantee proper use of recreation equipment according to recreation guidelines.</li>
        <li>Ensure valid recreation membership and member technical support.</li>
        <li>Maintain a safe and clean working environment by complying with procedures, rules, and regulations.</li>
      </ul>
    </section>

    <section>
      <h2 className="section-header">LEADERSHIP EXPERIENCE</h2>
      <hr className="section-line" />
      <h3 className="section-subheader">BOISE STATE MEN’S SOCCER - BOISE, ID | August 2020 - December 2023</h3>
      <p className="section-leadership">Player, Center-Midfield</p>
      <ul>
        <li>Starter all four years in the center-midfielder role.</li>
        <li>Developed a strong sense of concentration, work ethic, and perseverance to meet personal and team goals.</li>
        <li>Committed approximately 30 hours per week to training, meetings, film study, travel and competitions while maintaining a full academic course load and work schedule.</li>
      </ul>
      <h3 className="section-subheader">PI KAPPA ALPHA FRATERNITY EXECUTIVE BOARD - BOISE STATE UNIVERSITY | September 2020 - January 2022</h3>
      <p className="section-leadership">Interfraternity Council Delegate</p>
      <ul>
        <li>Key communication liaison between Pi Kappa Alpha Fraternity and all Greek communities.</li>
        <li>Conduct all weekly meetings and events and routinely collaborate with members of the chapter to communicate any updates or new processes within Greek life.</li>
        <li>Govern, serve, and represent Pi Kappa Alpha Fraternity with highest integrity while also improving chapter morale.</li>
      </ul>
    </section>

    <section>
      <h2 className="section-header">SKILLS</h2>
      <hr className="section-line" />
      <p className="section-languages">Languages:</p>
      <ul>
        <li>Java, Javascript, C, C#, SQL, PHP, Python, HTML, CSS, Scheme, GoLang.</li>
      </ul>
      <p className="section-tech">Technical:</p>
      <ul>
        <li>Knowledge of algorithms, data structures, object oriented programming, and Scrum development.</li>
        <li>Experience using iOS, Android OS, macOS, Windows and Linux Operating Systems.</li>
        <li>Hands-on experience in configuring, securing, and optimizing cloud platforms such as AWS and Azure VM’s. </li>
        <li>Experience in front and back end website development.</li>
        <li>Proficient with Active Directory, ServiceNow Workflow, and Procurement.</li>
        <li>Proficient in networking protocols with ensuring efficient data communication and network management.</li>
        <li>Proficient in designing, implementing, and maintaining relational database management systems.</li>
      </ul>
    </section>

    <section>
    <h2 className="section-header">ACADEMIC PROJECTS</h2>
      <hr className="section-line" />
      <h3 className="section-subheader">WEB DEVELOPMENT</h3>
      <p className="section-jobtitle">Personal Fitness Website Project (Available on GitHub)</p>
      <ul>
        <li>PHP, CSS, and MySQL implementation to develop a personal website with an additional introduction to the technologies used for client-side and server-side web development.</li>
        <li>Focused on learning fundamentals behind competing web technologies, best practices for design and usability, and building rich, dynamic, n-tier secure web applications.</li>
      </ul>
      <h3 className="section-subheader">EXPENSES TRACKER WEB APPLICATION </h3>
      <p className="section-jobtitle">Expenses Reimbursement Tracker (Available on GitHub)</p>
      <ul>
        <li>Developed an Expense Tracker Web Application using PHP, JavaScript, and Expenses API, emphasizing seamless interactions without page refreshes.</li>
        <li>Implemented AJAX-driven data retrieval from the "Get" API endpoint, showcasing adept management of extensive datasets for optimal performance.</li>
        <li>Implemented a secure authentication process to verify user credentials against the Expenses API, ensuring a user-friendly experience with meaningful error messages. Additionally, enabled real-time transaction addition through an intuitive form, utilizing the "CreateTransaction" API endpoint and updating the display without requiring a page reload.</li>
      </ul>
      <h3 className="section-subheader">OPERATING SYSTEMS</h3>
      <p className="section-jobtitle">DeQueue Project (Available on GitHub)</p>
      <ul>
        <li>C implementation of a double-ended queue, complete with a thorough unit testing suite.</li>
        <li>Involved memory allocation, leak management, and extensive debugging and testing.</li>
      </ul>
    </section>
  </div>
);

const Portfolio = () => (
  <div>
    <h1>Projects</h1>
    <section>
  <h2 className="section-header1"><a href="https://platinumplattfitness-2bd455768806.herokuapp.com/" id="platinumplattfitnessLink" target="_blank" rel="noopener noreferrer">PLATINUMPLATT FITNESS</a></h2>
      <hr className="section-line" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <video src="/PlatinumPlattFitness.mp4" alt="PlatinumPlatt" className="video-style" controls autoPlay />
        <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', marginTop: '-25px' }}>
          <p className="section-jobtitle">Personal Fitness Website Project (Available on GitHub)</p>
          <ul>
            <li>PHP, CSS, Javascript and MySQL implementation to develop a personal website with an additional introduction to the technologies used for client-side and server-side web development.</li>
            <li>Focused on learning fundamentals behind competing web technologies, best practices for design and usability, and building rich, dynamic, n-tier secure web applications.</li>
            <li>The website offers users access to a wealth of resources, including personalized workout suggestions, nutritional guidance, valuable fitness tips, and a platform to connect with local trainers.</li>
            <li>Implemented secure user authentication and authorization mechanisms to ensure data privacy and protection.</li>
            <li>Integrated a comprehensive database to store user profiles, fitness goals, allowing for an interactive user experience.</li>
          </ul>
        </div>
      </div>
      <h2 className="section-subheader">EXPENSES TRACKER WEB APPLICATION </h2>
      <hr className="section-line" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <video src="/Expenses.mp4" alt="Expensify" className="video-style" controls autoPlay />
        <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', marginTop: '-10px' }}>
          <p className="section-jobtitle">Expenses Reimbursement Tracker (Available on GitHub)</p>
          <ul>
            <li>Developed an Expense Tracker Web Application using PHP, JavaScript, and Expenses API, emphasizing seamless interactions without page refreshes.</li>
            <li>Implemented AJAX-driven data retrieval from the "Get" API endpoint, showcasing adept management of extensive datasets for optimal performance.</li>
            <li>Implemented a secure authentication process to verify user credentials against the Expenses API, ensuring a user-friendly experience with meaningful error messages. Additionally, enabled real-time transaction addition through an intuitive form, utilizing the "CreateTransaction" API endpoint and updating the display without requiring a page reload.</li>
            <li>Provided users with a streamlined interface for tracking and managing expenses, promoting efficient financial management and organization.</li>
          </ul>
        </div>
      </div>
      <h2 className="section-subheader">CLICKER APP </h2>
      <hr className="section-line" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <video src="/ClickerApp.mp4" alt="Clickerapp" className="video-style" controls autoPlay />
        <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', marginTop: '-25px' }}>
          <p className="section-jobtitle">React Clicker-App  (Available on GitHub)</p>
          <ul>
            <li>Developed using React, this universally enjoyable clicker game is designed for users of all ages and accessible on both IOS and Android devices.</li>
            <li>Unlock and strategically use power-ups like spawn speed boosts and points multipliers, driven by React's dynamic capabilities.</li>
            <li>The game features an immersive map with clickable markers, creating an engaging and visually diverse gaming experience through React.</li>
            <li>Utilizes an auto-remove markers upgrade for enhanced gameplay, automatically managing markers on the map, providing a seamless and engaging user experience with the assistance of React.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

function App() {
  return (
    <Router>
      <Helmet>
        <title>Austin Platt</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;




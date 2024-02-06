import React from "react";
import img1 from "../images/hungrysc.png";
import img2 from "../images/weathersc.png";
import img3 from "../images/notesc.png";
import dbimg from "../images/db.png";
import img4 from "../images/armory.png";
import img5 from "../images/giftysc.png";


function Portfolio() {
  return (
    <>
      <section className="container">
        <h1 className="listH1">Web Apps</h1>
        <ul className="portfolio-list">
          <li>
            <a href="https://jocular-otter-dbc985.netlify.app/">
            <div className="image">
              <img src={img1} alt="img1" className="imageImg" />
              <div className="overlay">
                <div className="overlayTitle">Hungry?</div>
                <div className="overlayP">Ever stuggled to figure out what to make for dinner? This app uses an api to give you a randomly genorated recipe including ingredients and directions on how to cook?</div>
              </div>
            </div>
            <p className="ptag">Role: Sole Developer</p>
            <p className="ptag">Tech Used: React.js | JavaScript | CSS | HTML | BootStrap | Vite | Free Meal Api |</p>
            <a href="https://github.com/FranklinBrad/Hungry.git">link to repo</a>
            </a>
          </li>
          <li>
          <a href="https://franklinbrad.github.io/Weather-App/">
            <div className="image">
              <img src={img2} alt="img1" className="imageImg" />
              <div className="overlay">
                <div className="overlayTitle">Weather App</div>
                <div className="overlayP">This app uses open weather API to allow users to search any US city and get the current weather along with the forcast for the next 5 days</div>
              </div>
            </div>
            <p className="ptag">Role: Sole Developer</p>
            <p className="ptag">Tech Used: JavaScript | CSS | HTML | BootStrap | OpenWeatherApp Api |</p>
            <a href="https://github.com/FranklinBrad/Weather-App">link to repo</a>
            </a>
          </li>
          <li>
          <a href="https://no-ig46.onrender.com/notes">
            <div className="image">
              <img src={img3} alt="img1" className="imageImg" />
              <div className="overlay">
                <div className="overlayTitle">Note Taker App</div>
                <div className="overlayP">This App allows you to take notes with a title and body and save them to be accesed at any time</div>
              </div>
            </div>
            <p className="ptag">Role: Sole Developer</p>
            <p className="ptag">Tech Used: JavaScript | CSS | HTML | BootStrap | Node | Express</p>
            <a href="https://github.com/FranklinBrad/Note-Taker-App">link to repo</a>
            </a>
          </li>
        </ul>
      </section>
      <section className="container">
        <h1 className="listH1">Data Bases</h1>
        <ul className="portfolio-list">
          <li>
          <a href="https://github.com/FranklinBrad/e-commerce-site">
            <div className="image">
              <img src={dbimg} alt="img1" className="imageImg" />
              <div className="overlay">
                <div className="overlayTitle">e-commerce-site</div>
                <div className="overlayP">This database simulates a e-commerce site with products, product categories and product tags</div>
              </div>
            </div>
            <p className="ptag">Role: Sole Developer</p>
            <p className="ptag">Tech Used: JavaScript | mySQL | Node | Express | Insomnia</p>
            <a href="https://github.com/FranklinBrad/e-commerce-site">link to repo</a>
            </a>
          </li>
          <li>
          <a href="https://github.com/FranklinBrad/hw-18-noSQL">
            <div className="image">
              <img src={dbimg} alt="img1" className="imageImg" />
              <div className="overlay">
                <div className="overlayTitle">Social Media Data-Base</div>
                <div className="overlayP">This databse simulates a social media app in wich you can creat a user, add friends, post your thoughts, and give reactions to peoples thoughts.</div>
              </div>
            </div>
            <p className="ptag">Role: Sole Developer</p>
            <p className="ptag">Tech Used: JavaScript | mongoDB | mongoose | Node | Express | Insomnia</p>
            <a href="https://github.com/FranklinBrad/hw-18-noSQL">link to repo</a>
            </a>
          </li>
        </ul>
      </section>
      <section className="container">
        <h1 className="listH1">Team Projects</h1>
        <ul className="portfolio-list">
          <li>
          <a href="https://mvc-armory-project-3cbd4054ef3a.herokuapp.com/">
            <div className="image">
              <img src={img4} alt="img1" className="imageImg" />
              <div className="overlay">
                <div className="overlayTitle">MVC-Armory</div>
                <div className="overlayP">In this app you have to create an account to make a character, you can add new items to your character and as you add the it will update your stats. you can then save a character to your account and return to it any time</div>
              </div>
            </div>
            <p className="ptag">Role: Backend Developer, in charge of databse, models, seeds.
            </p>
            <p className="ptag">Tech Used: JavaScript | mySQL | CSS | Bootstrap | Node | Express | Insomnia</p>
            <a href="https://github.com/mollydotwhat/mvc-armory/tree/main">link to repo</a>
            </a>
          </li>
          <li>
          <a href="https://mvc-armory-project-3cbd4054ef3a.herokuapp.com/">
            <div className="image">
              <img src={img5} alt="img1" className="imageImg" />
              <div className="overlay">
                <div className="overlayTitle">Gifty</div>
                <div className="overlayP">This app is made to get gift idea for a friend or family memeber, have them fill out the list and get and idea of what they want! sign in to save multiple peoples gift ideas.</div>
              </div>
            </div>
            <p className="ptag">Role: Front End Developer, Collabed to help design general layout/apearance and added animations to the website</p>
            <p className="ptag">Tech Used: Full Mern Stack, JavaScript | mongoDB | CSS | Bootstrap | Node | Express | Lottie animations | Insomnia</p>
            <a href="https://github.com/timpyjoe/Gift-idea-tracker">link to repo</a>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Portfolio;




// import React from "react";
// import img1 from "../images/coding.png";
// function Portfolio() {
//   return (
//     <>
//       <h1>My Work</h1>
//       <section>
//         <div className="work">
//           <ul className="projects">
//             <li>
//               <h3>Tech Blog</h3>
//               <a href="https://mvctechblog124-c97290ab27bd.herokuapp.com/">
//                 <img src={img1} className="img1" />
//               </a>
//             </li>
//             <li>
//               <a href="https://github.com/FranklinBrad/MVC-blog.git">
//                 Link To Repository
//               </a>
//             </li>
//             <li>
//               <h3>Note Taker</h3>
//               <a href="https://note-taker12543-19467088c2ec.herokuapp.com/">
//                 <img src={img1} className="img1" />
//               </a>
//             </li>
//             <li>
//               <a href="https://github.com/FranklinBrad/Note-Taker-homework.git">
//                 Link To Repository
//               </a>
//             </li>
//             <li>
//               <h3>E-Commerse Site</h3>
//               <a href="https://github.com/FranklinBrad/e-commerce-site#readme">
//                 <img src={img1} className="img1" />
//               </a>
//             </li>
//             <li>
//               <a href="https://github.com/FranklinBrad/e-commerce-site#readme">
//                 Link To Repository
//               </a>
//             </li>
//             <li>
//               <h3>Note Taker PWA</h3>
//               <a href="https://jate-pwa19-3f32060688f0.herokuapp.com/Links to an external site.">
//                 <img src={img1} className="img1" />
//               </a>
//             </li>
//             <li>
//               {" "}
//               <a href="https://github.com/FranklinBrad/19-PWA.git">
//                 Link To Repository
//               </a>
//             </li>
//             <li>
//               <h3>Logo Generator</h3>
//               <a href="https://github.com/FranklinBrad/Logo-Generator.git">
//                 <img src={img1} className="img1" />
//               </a>
//             </li>
//             <li>
//               <a href="https://github.com/FranklinBrad/Logo-Generator.git">
//                 Link To Repository
//               </a>
//             </li>
//             <li>
//               <h3>Weather App</h3>
//               <a href="https://franklinbrad.github.io/Weather-App/Links to an external site.">
//                 <img src={img1} className="img1" />
//               </a>
//             </li>
//             <li>
//               <a href="https://github.com/FranklinBrad/Weather-App.gitLinks to an external site.">
//                 Link To Repository
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Portfolio;

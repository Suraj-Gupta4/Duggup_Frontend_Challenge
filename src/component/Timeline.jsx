import ellipseIcon from "../assets/Ellipse 5.png";
import steveJobs from "../assets/steveJobs.jpg";
import samAlt from "../assets/samAlt.jpg";
import Dugguplogo from "../assets/Dugguplogo.png";
import upArrowIcon from "../assets/upArrowIcon.png";
import bigEllipseIcon from "../assets/Ellipse 6.png";
import desktopPhoto from "../assets/desktopPhoto.jpg";
import mapPhoto from "../assets/mapPhoto.png";
import BetterUp from "../assets/BetterUp.jpg";
import Firstbox from "./Firstbox";
import Secondbox from "./Secondbox";

function TimeLine() {
 return <div>

<div style={{width:'987px', height:'893px', position:'relative', top:'75px', left:'128px'}}>
              
              {/* first box */}
              <Firstbox img1={ellipseIcon} img2={steveJobs}  img3={samAlt} 
              text1="No amount of technology can convert a bad story into a good story."
              text2="Most people don't have original ideas. Here is how Sam Altman pushes himself to have..."></Firstbox>
              
             {/* Second box */}
              <Secondbox img1={Dugguplogo} img2={upArrowIcon} img3={bigEllipseIcon}
              text1="Duggup"
              text2="Joined Nov 2023"
              text3="Co-Founder and CEO"
              text4="Full-time · Remote"></Secondbox>

              {/* Third box */}
              <Firstbox img1={ellipseIcon} img2={desktopPhoto}  img3={mapPhoto} 
              text1="Startup Lesson I am reflecting. Don't build for the 'average person'."
              text2="Your biggest regrets at 80 will be acts of omission"></Firstbox>

             {/* Fourth box */}
            <Secondbox img1={BetterUp} img2={upArrowIcon} img3={bigEllipseIcon}
              text1="BetterUp"
              text2="Joined Sep 2022"
              text3="VP Engineering"
              text4="Full-time"></Secondbox>

    </div>   
             
 </div>
}



export default TimeLine
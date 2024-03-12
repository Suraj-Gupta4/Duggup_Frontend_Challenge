import logo from "../assets/logo.png";
import homeIcon from "../assets/homeIcon.png";
import storyIcon from "../assets/Story.png";
import learnIcon from "../assets/Icon.png";
import plusIcon from "../assets/plusIcon.png";
import profileIcon from "../assets/Image1.png";
import downArrowIcon from "../assets/downArrowIcon.png";

function Navbar() {
    return <div>

<div>
      <div style={{width:'1424px', height:'73px', display:'flex', justifyContent:'space-between', padding:'10px 0px 0px 0px', position:'relative', left:'80px', alignItems:'center'}}>
           <div style={{width:'108px', height:'27px', gap:'4px', display:'flex'}}>
            <img src={logo}></img>
           </div>
           
           
           <div style={{display:'flex', alignItems:'center', gap:'40px', width:'749px', height:'52px',}}>

            <div style={{display:'flex', width:'461px', height:'38px', gap:'40px', marginTop:'7px', marginBottom:'7px'}}>
                <div style={{display:'flex', width:'319px', height:'38px'}}>
                  
                  <div style={{width:'112px', height:'36px', padding:'0px 16px 0px 16px', borderRadius:'40px', display:'flex', boxSizing:'border-box'}}>
                  <div style={{width:'24px', height:'24px', padding:'4px', margin:'6px 0px'}}>
                  <div style={{width:'16px', height:'16px', border:'0px 2px 0px 0px', gap:'5.33px'}}>
                  <div style={{width:'16px', height:'16px'}}>
                  <img src={homeIcon}></img>
                  </div>
                  
                  </div>
                  </div>
                  <div style={{width:'56px', height:'36px', padding:'8px', gap:'8px'}}>
                    <div style={{width:'40px', height:'20px', fontWeight:'400', fontSize:'14px', lineHeight:'20px', color:'#4D4D4D'}}>
                    Home</div>
                  </div>
                  </div>


                  <div style={{width:'106px', height:'38px', padding:'0px 16px 0px 16px', borderRadius:'40px', display:'flex', boxSizing:'border-box'}}>
                  <div style={{width:'24px', height:'24px', padding:'4px', margin:'7px 0px'}}>
                 
                    <img src={storyIcon} style={{width:'16px', height:'16px'}}></img>
                  
                  </div>
                  <div style={{width:'50px', height:'20px', margin:'9px 0px'}}>
                    <div style={{width:'50px', height:'20px', fontWeight:'400', fontSize:'14px', lineHeight:'20px', color:'#4D4D4D'}}>
                    Explore</div>
                  </div>
                  </div>


                  <div style={{width:'101px', height:'38px', padding:'0px 16px 0px 16px', gap:'8px', display:'flex', boxSizing:'border-box'}}>
                  <div style={{width:'23px', height:'22px', padding:'4px', margin:'8px 0px'}}>
                  
                    <img src={learnIcon} style={{width:'15px', height:'14px', border:'1px #666666', }}></img>
                  
                  </div>
                  <div style={{width:'38px', height:'20px', margin:'9px 0px'}}>
                    <div style={{width:'38px', height:'20px', fontWeight:'400', fontSize:'14px', lineHeight:'20px', color:'#4D4D4D'}}>
                    Learn</div>
                  </div>
                  </div>
                 
                </div>

             {/*Post button  */}
            <div style={{width:'102px', height:'36px', borderRadius:'4px', display:'flex', border:'0.5px solid #4D4D4D', 
             boxShadow:'0px 4px #4D4D4D', padding:'0px 16px 0px 16px', boxSizing:'border-box', color:'#FFFFFF'}}>
              <div style={{width:'24px', height:'24px', padding:'4px', margin:'6px 0px', boxSizing:'border-box'}}>
                <div style={{width:'16px', height:'16px'}}>
                  <img src={plusIcon}></img>
                </div>
              </div>
              <div style={{width:'46px', height:'36px', padding:'8px', gap:'8px', boxSizing:'border-box', display:'flex'}}>
                <div style={{width:'30px', height:'20px', fontWeight:'400', fontSize:'14px', lineHeight:'20px', color:'#4D4D4D'}}>
                Post</div>
              </div>
            </div>
             
            </div>
           
           {/* photo&name&down_arrow */}
            <div style={{width:'248px', height:'52px', border:'0px 0px 1px 0px', padding:'0px 16px', gap:'12px', display:'flex', boxSizing:'border-box'}}>
            <div style={{width:'48px', height:'48px', borderRadius:'1000px', border:'0.5px solid #4D4D4D', margin:'2px 0px'}}>
              <img style={{width:'48px', height:'48px', borderRadius:'1000px'}} 
              src={profileIcon}></img>
            </div>
            <div style={{width:'128px', height:'24px', gap:'8px', margin:'14px 0px', display:'flex'}}>
            <div style={{width:'128px', height:'24px', fontWeight:'500', fontSize:'20px', lineHeight:'24px', color:'#4D4D4D'}}>
            Krishna Kiran</div>
           </div>
            <div style={{width:'16px', height:'16px', transform: 'rotate(0deg)', padding: '0px 4px 0px 4px', margin:'14px 0px', boxSizing:'border-box' }}>
              <img src={downArrowIcon}></img>
            </div>
              
            </div>
           </div>
           
         </div>
         </div>
         
         <div style={{width:'1424px',borderStyle:'dashed', borderWidth:'1px', borderColor:'#c1c9cf', borderRadius:'2px', position:'relative', left:'80px'}}></div>
     
    </div>
}

export default Navbar;
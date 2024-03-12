import profileIcon2 from "../assets/profilePhoto.jpg";
import socialIcon from "../assets/socialIcon.png";
import myWebsiteIcon from "../assets/myWebsiteIcon.png";
import dotIcon from "../assets/3dotIcon.png";

function Description() {
 return <div>
     
     <div style={{display:'flex'}}>

        {/* Profile photo and name */}
        <div>
        
            <img style={{width:'120px', height:'120px', borderRadius:'120px', border:'5px solid #EAEFF5', position:'relative', top:'50px', left:'254px'}} src={profileIcon2}></img>
        
          <div style={{width:'156px', height:'56px', position:'relative', top:'57px', left:'233px',
          fontSize:'24px', fontWeight:'700', textAlign:'center', lineHeight:'28px', color:'#4B5C6D'}}>
            Krishna Kiran
          </div>
        </div>
          
          
          <div style={{width:'834px', height:'138px', marginLeft:'20px', position:'relative', top:'69px', left:'253px'}}>
           
            <div style={{display:'flex', width:'834px', height:'82px', justifyContent:'space-between'}}>
              
            <div style={{width:'592px', height:'72px', padding:'0px 8px 0px 0px', boxSizing:'border-box', marginBottom:'10px'}}>
              <span style={{width:'584px', height:'72px', fontWeight:'400', fontSize:'14px', lineHeight:'24px', marginRight:'8px'}}>Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. 
              I write hot-takes on building a business, shipping delightful products and 
              accelerating product and career growth.
              </span>
            </div>

              <div style={{width:'140px', height:'82px'}}>
              <div style={{display:'flex', justifyContent:'end', marginBottom:'8px'}}>
              <img src={socialIcon} style={{width:'36px', height:'36px', borderRadius:'90px', position:'relative', right:'0px'}}>
             </img>
             </div>   
                <div style={{width:'140px', height:'38px'}}>
                <div style={{width:'140px', height:'38px'}}>
                <div style={{width:'140px', height:'19px', fontWeight:'700', fontSize:'16px', lineHeight:'20px', textAlign:'right', color:'#000000'}}>
                Duggup</div>
                  <div style={{width:'122px', height:'15px', marginTop:'4px', marginLeft:'18px'}}>
                  <div style={{width:'122px', height:'15px', color:'#7A9299',fontWeight:'400', fontSize:'12px', lineHeight:'15px', textAlign:'right'}}>Co-Founder and CEO</div>
                  </div>
                </div>
                  
                  
                </div>
              </div>
            </div>
            


            <div style={{width:'834px', height:'36px', display:'flex', justifyContent:'space-between', marginTop:'20px'}}>
              <div style={{width:'91px', height:'36px', borderRadius:'4px', border:'0.5px solid #4D4D4D', boxShadow:'0px 4px #4D4D4D', 
              padding:'0px 16px 0px 16px', color:'#FFFFFF', boxSizing:'border-box'}}>
              <div style={{width:'59px', height:'36px', padding:'8px', boxSizing:'border-box'}}>
                <span style={{width:'43px', height:'20px', fontWeight:'400', fontSize:'14px', lineHeight:'20px', color:'#4D4D4D'}}>Follow</span>
              </div>
              </div>

              <div style={{width:'174px', height:'28px', gap:'16px', display:'flex', margin:'4px 0px'}}>
                <div style={{width:'115px', height:'20px', gap:'48px',margin:'4px 0px',marginRight:'16px'}}>
                  <div style={{width:'96px', height:'20px', gap:'24px', marginLeft:'15px'}}>
                  <div style={{width:'96px', height:'20px', gap:'4px', display:'flex', marginLeft:'19px'}}>
                
                  <div style={{width:'76px', height:'20px', fontWeight:'400', fontSize:'14px', lineHeight:'20px', color:'4D4D4D'}}>
                  My website</div>
                  
                  
                    <div style={{width:'16px', height:'16px'}}>
                     <img src={myWebsiteIcon} style={{width:'13px', height:'13px', position:'relative', top:'1.6px', left:'1.6px'}}></img>
                    </div>
                  </div>
                  </div>
                </div>

                <div style={{width:'28px', height:'28px'}}>
                  <img src={dotIcon} style={{width:'22.4px', height:'5.6px', position:'relative', top:'1.6px', left:'1.6px'}}></img>
                </div>
              </div>

            </div>
          </div>

        </div>
 </div>
}

export default Description;

function Firstbox (props) {
 return <div>
<div style={{width:'987px', height:'288px', display:'flex'}}>
                <div style={{width:'207px', height:'288px', padding:'0px 8px 0px 8px', boxSizing:'border-box'}}>
                  <div style={{width:'191px', height:'288px', gap:'20px', margin:'0px 8px', display:'flex', alignItems:'center'}}>

                    <div style={{width:'140px', height:'15px', gap:'8px', display:'flex', justifyContent:'end'}}>
                      <div style={{width:'56px', height:'15px', gap:'4px'}}>
                        <div style={{width:'56px', height:'15px', gap:'2px'}}>
                          <div style={{width:'56px', height:'15px', fontWeight:'400', fontSize:'12px', lineHeight:'14.52px', textAlign:'right'}}>
                          Dec 2023</div>
                        </div>
                      </div>
                    </div>

                    <div style={{width:'31px', height:'288px'}}>
                    <center>
                    <div style={{height:'130px', borderStyle:'dashed', borderWidth:'1px', borderColor:'#778FB1', borderRadius:'2px', width:'0px', background:'transparent'}}></div>
                      <img src={props.img1} style={{width:'16px', height:'16px', paddingTop:'4px'}}></img>
                      <div style={{height:'130px', borderStyle:'dashed', borderWidth:'1px', borderColor:'#778FB1', borderRadius:'2px', width:'0px'}}></div>
                    </center>
                      
                    </div>

                  </div>
                </div>


                <div style={{width:'780px', height:'274px', gap:'24px', margin:"7px 0px"}}>
                  <div style={{width:'764px', height:'274px', gap:'4px', marginRight:'16px'}}>
                    <div style={{width:'764px', height:'274px', padding:'24px', gap:'36px', display:'flex', boxSizing:'border-box'}}>

                      <div style={{width:'344px', height:'226px', borderRadius:'12px', border:'0.5px solid #D0D5DD', color:'#FFFFFF'}}>
                       <img src={props.img2} style={{width:'344px', height:'136px', borderRadius:'12px 12px 0px 0px', objectFit:'cover'}}></img>
                       <div style={{width:'344px', height:'90px', padding:'24px', gap:'24px', boxSizing:'border-box'}}>
                        <div style={{width:'296px', height:'42px', gap:'8px'}}>
                          <div style={{width:'296px', height:'42px', fontWeight:'400', fontSize:'14px',lineHeight:'21px', color:'#141618'}}>
                          {props.text1}</div>
                        </div>
                       </div>
                      </div>
                      

                      <div style={{width:'344px', height:'226px', borderRadius:'12px', border:'0.5px solid #D0D5DD', color:'#FFFFFF'}}>
                       <img src={props.img3} style={{width:'344px', height:'136px', borderRadius:'12px 12px 0px 0px', objectFit:'cover'}}></img>
                       <div style={{width:'344px', height:'90px', padding:'24px', gap:'24px', boxSizing:'border-box'}}>
                        <div style={{width:'296px', height:'37px', gap:'8px'}}>
                          <div style={{width:'296px', height:'41px', fontWeight:'400', fontSize:'14px',lineHeight:'21px', color:'#141618'}}>
                          {props.text2}</div>
                        </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
 </div>

}

export default Firstbox
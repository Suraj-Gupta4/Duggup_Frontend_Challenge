
function Secondbox (props) {
 return <div>

<div style={{width:'968px', height:'157px', marginRight:'19px', display:'flex'}}>
                
                <div style={{width:'207px', height:'157px', padding:'0px 8px 0px 8px', gap:'8px', boxSizing:'border-box'}}>
                  <div style={{width:'191px', height:'157', gap:'20px', margin:'0px 8px', display:'flex', alignItems:'center'}}>

                    <div style={{width:'140px', height:'126px', gap:'8px' }}>
                    <div style={{display:'flex', justifyContent:'end', marginBottom:'8px'}}>
                    <img src={props.img1} style={{width:'48px', height:'48px', borderRadius:'90px'}}></img>
                    </div>
                      
                      <div style={{width:'140px', height:'70', gap:'4px'}}>
                        <div style={{width:'140px', height:'19px', fontWeight:'700', fontSize:'16px', lineHeight:'19.36px', textAlign:'right', color:'#141618', marginBottom:'4px'}}>
                        {props.text1}</div>

                        <div style={{width:'134px', height:'47px', gap:'2px', marginLeft:'6px'}}>
                          <div style={{width:'134px', height:'15px', fontWeight:'400', fontSize:'12px', lineHeight:'14.52px', textAlign:'right', color:'#7A9299', marginBottom:'2px'}}>
                          San Francisco Bay Area</div>
                          
                          <div style={{width:'56px', height:'30px', fontWeight:'400', fontSize:'12px', lineHeight:'14.52px', textAlign:'right', color:'#7A9299', marginLeft:'78px'}}>
                          {props.text2}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{width:'31px', height:'157px'}}>
                    <center>
                    <div style={{width:'31px', height:'10px', padding:'2px 4px 2px 4px', gap:'8px', transform: 'rotate(180deg)', boxSizing:'border-box'}}>
                        <img src={props.img2} style={{width:'13px', height:'6px', transform: 'rotate(180deg)', paddingTop:'8px'}}></img>
                      </div>
                       
                       <div style={{width:'0px', height:'60px', borderStyle:'dashed', borderWidth:'1px', borderColor:'#778FB1', borderRadius:'2px'}}></div>
                       <img src={props.img3} style={{ width:'28px', height:'27px'}}></img>
                       <div style={{width:'0px', height:'60px', borderStyle:'dashed', borderWidth:'1px', borderColor:'#778FB1', borderRadius:'2px'}}></div>
                    </center>
                      

                    </div>
                  </div>
                </div>

                <div style={{ width:'761px', height:'99px', padding:'8px 24px 8px 24px', gap:'8px', margin:'29px 0px', boxSizing:'border-box'}}>
                  <div style={{width:'713px', height:'83px', borderRadius:'13px', padding:'16px 20px 16px 20px', gap:'4px', color:'#FFFFFF', boxShadow:'0px 1px 2px 0px #DBE5F540', boxSizing:'border-box'}}>
                    <div style={{width:'673px', height:'32px', fontWeight:'700', fontSize:'20px', lineHeight:'32px', color:'#141618'}}>
                    {props.text3}</div>
                    <div style={{width:'559px', height:'15px', marginTop:'4px'}}>
                      <div style={{width:'103px', height:'15px', fontWeight:'400', fontSize:'12px', lineHeight:'14.52px', color:'#7A9299'}}>
                      {props.text4}</div>
                    </div>
                  </div>
                </div>
              </div>

 </div>
}

export default Secondbox;
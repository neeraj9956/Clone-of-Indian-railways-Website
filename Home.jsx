"use client";
import React from "react";
import Slider from './Slider';
import { Link } from "react-router-dom";


/*const page1 =()=>{
  const[Images,setImages] = useState([]);
  const getDetails=async()=>{
    try{
      const response = await axios.get("https://www.pexels.com/search/railway/");
      const data=response.data;
      setImages(data);
      console.log(Images)
    }
    catch(error){
      console.log("Error Fetched Images");
    }
  };
 
}*/


const page=()=>{
  return (
    <>
    <div className="mainpage">
      <img src="https://indianrailways.gov.in/images/logo.gif" alt="#"/>
      <Link to="/Home"><h4>Home</h4></Link>
     <Link href="About"><h4>About</h4></Link>
     <Link to="/Services"> <h4>Services</h4></Link>
     <Link to="/Login"><h4>Login</h4></Link>
     <Link to="/register"><h4>SignUp</h4></Link>
      <img id="corn" src="https://indianrailways.gov.in/images/log-3.jpg" alt="#"/>
      <img  id ="in"src ="https://indianrailways.gov.in/images/logo.png" alt="#"/>
      </div>
      <div className="navbar">
        <h5>ministry of railways</h5>
        <h5>bharat gaurav trains</h5>
        <h5>zonal railways</h5>
        <h5>passenger services</h5>
        <h5>freight services</h5>
        <h5>manufacturing units</h5>
        <h5>education and research</h5>
        <h5>heritage</h5>
        <h5>recruitment</h5>
        <h5>swachh bharat</h5>
        <h5>rti</h5>
        <h5>csr</h5>
        <h5>ir map</h5>
      </div>
      <div className="slide">
      <Slider/>
      </div>
      <div className="move">
        <div className="rect">
          <h4>Latest Headlines</h4>
        </div>
      <marquee width="100vw" direction="left" height="50px">
      <h5>Indian Railways appeals for identification of the deceased of Rail accident in Odisha  Manufacturing and Maintenance of 9000 hp and 12000 electric HP locomotive</h5>
</marquee>
      </div>
      
      
<div class="grid-container">
  <div class="grid-item">E-Ticketing</div>
  <div class="grid-item">Train Time Table</div>
  <div class="grid-item">Indian Railways</div>  
  <div class="grid-item2">PNR Status</div>
  <div class="grid-item2">Railway Tenders</div>
  <div class="grid-item2">WallPapers</div>  
  <div class="grid-item3">FNR Enquiry</div>
  <div class="grid-item3">Rail Drishti</div>
  <div class="grid-item3">Station Gallery</div>  
</div>
<footer className="footer">
  <img className="img1"src="https://indianrailways.gov.in/images/footerlogo.gif"></img>
  <img className="img2"src="https://indianrailways.gov.in/make.png"></img>
  <img className="img3"src="https://indianrailways.gov.in/incredible-india.png"></img>
  <h5>Last UpDated : Sun 17 September 2023</h5>
  <h6>Home|Feedback|Disclaimer |Terms & Conditions |Privacy Policy |Sitemap |Contact Us |Help</h6>
  
    </footer>
        {page2()}
        {page3()}
     
       
        
        
</>
  );

};
export default page;
const page2=()=>{
  return(
    <>
    <div className="container">
      <img className="img1" src="https://indianrailways.gov.in/PM.png" alt="Narendar Modi" ></img>
      <img className="img1" src="https://indianrailways.gov.in/min1.jpg" alt="Shri Ashwini Vaishnaw"></img>
      <img className="img1" src="https://indianrailways.gov.in/min2.jpg"></img>
      <img className="img1" src="https://indianrailways.gov.in/min3.jpg"></img>
       
      </div>

    </>
  );
};
const page3=()=>{
  return(
    <>
   
    <div className="box">
      <h2>Whats New</h2>
      <h3>•Ek Bharat Sanskriti Sangam</h3>
      <h3>•रेल राजभाषा” पत्रिका, 134 वां अंक : View(3.05 MB)</h3>
      <h3>• Suggestions for Amrit Bharat Stations/ सुझाव दो आपका स्टेशन कैसा हो ?</h3>
      <h3>• New Standard Signages for Railway Stations on IR : View(15.3 MB)</h3>
      <h3>• रेल राजभाषा” पत्रिका, 132 वां अंक : View(4.3 MB)</h3>
      <h3>• Azadi Ka Amrit Mahotsav 2023-24 : View(2.2 MB)</h3>
      <h3>• Railway Budget Documents 2023-24</h3>
      <h3>• Children rescued by RPF</h3>
      <h3>• SPECIAL CAMPAIGN 2.0 ACHIEVEMENTS AND BEST PRACTICES OF MINISTRY OF RAILWAYS</h3>
      <h3>• Indian Railways Innovation Portal</h3>
      <h3>• Innovation Policy</h3>
      <h3>• EK BHARAT SHRESHTHA BHARAT- SENTENCE OF THE DAY </h3>
      <h3>• NOVEL CORONAVIRUS (Covid-19)</h3>
      </div>
    </>
  );
  
};




import "./contact.css"
import ActivityAppBar from "../../components/app-bar"
import ContactCard from "../../components/contactcard/contact-card";
import ContactCard2 from "../../components/contactcard/contact-card2";
import ContactCard3 from "../../components/contactcard/contact-card3";
import ContactCard4 from "../../components/contactcard/contact-card4";
import ContactCard5 from "../../components/contactcard/contact-card5";
import ContactCard6 from "../../components/contactcard/contact-card6";
import Footer from "../../components/footer";
function Contact() {
    return(
     <html>
      <ActivityAppBar></ActivityAppBar>
      <link
            href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
            rel="stylesheet"
          />
      <body>
        <div className="line"> 
            <p className="text1"> Contact Us</p>
        </div>
        <div className="grid-container">
          <ContactCard></ContactCard>
          <ContactCard2></ContactCard2>
          <ContactCard3></ContactCard3>
          <ContactCard4></ContactCard4>
          <ContactCard5></ContactCard5>
          <ContactCard6></ContactCard6>
        </div>
        <div>
          
        </div>
        <Footer/>
      </body>
     </html>
    )
  }
  
  export default Contact;
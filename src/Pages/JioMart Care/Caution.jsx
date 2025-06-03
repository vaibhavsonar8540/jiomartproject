import React from 'react'
import NavbarUp from '../../Components/NavBar/NavbarUp'
import FooterMain from '../../Components/Footer/Footer'
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Caution = () => {
  return (
    <div>
        <NavbarUp/>
        <div className='caution-main' style={{width:"80%",margin:" auto"}}>
            <h3 style={{fontFamily:"sans-serif"}}>Home <span><IoIosArrowForward /></span> Caution Notice</h3>
            <div className='sub-caution' style={{padding:"10px"}}>
                <h1 style={{fontFamily:"sans-serif"}}>CAUTION NOTICE – BEWARE OF FRAUD</h1>
                <p>It has come to the notice of www.jiomart.com (“JioMart” or “Portal”) that, some fraudsters are approaching customers</p>
                <p>(a) with promotional offers from the Portal;</p>
                <p>(b) through fake email IDs as well as fake domain names/website links which may appear confusingly similar or identical with the Portal and its Group Companies;</p>
                <p>(c) through Social media Apps such as WhatsApp/Facebook/Instagram/Twitter by including the trademark/logo and/or the logo of the Portal as part of their profile picture and pushing fake offers to the innocent public, by luring them with false promises; and</p>
                <p>(d) making physical visits at customers door step seeking OTP to process cancellation of order that was not placed by you.</p>
                <h3 style={{fontFamily:"sans-serif"}}>CUSTOMERS, GENERAL PUBLIC AND PROSPECTIVE CUSTOMERS ARE HEREBY CAUTIONED:</h3>
                <p>(i) To exercise caution against fraudsters who may use fake email IDs, fake profiles on Social media (WhatsApp, Facebook, Instagram, Twitter, etc.,) domains, websites, telephones and advertisements in newspapers/magazines, etc., by impersonating themselves to be from the Portal and/or its Group Companies and claim to offer promotional offers, collect customer account details, ask for advance money to process winners, etc.;</p>
                <p>(ii) Portal or its Group Companies or any of its representatives will NOT call for any advance payment of money from any of its prospects/customers;</p>
                <p>(iii) Portal or any of its representatives would NOT ask for any OTP or PIN to offer any promotional offers;</p>
                <p>(iv) Portal or any of its representatives would NOT ask for any OTP or PIN for cancellation of orders at your door step. You are obliged NOT to share OTP/PIN with any person or authorizing UPI requests in wallets, received from unknown sources, as the same may lead to a fraud, through which, money may be debited from your Bank account and credited to fraudster’s account (v) Portal email ID contains www.jiomart.com ALONE and does NOT contain any other domain name such as Gmail/Yahoo/Rediff/Ymail, etc., or in any other form;</p>
                <p>(v) To exercise caution against fraudsters luring you with fictitious offers over unidentified phone numbers, fake email Ids, fake website/domain and/or through any other physical or electronic medium and styling themselves as representative of Portal and/or its Group Companies. Before dealing with such fraudsters and/or responding/accessing any fraudulent advertisements, telephone calls, emails and website, to protect yourself against any fraud and criminal acts of the perpetrators, you are advised to act responsibly and are solely obliged to verify:</p>
                <p><GoDotFill /> (a) by reaching out to Official customer care number of Portal ;</p>
                <p><GoDotFill /> (b) the veracity of such claims from the Company’s official website www.jiomart.com .</p>
                <p>General Public and prospective customers are also advised to immediately report any suspicious incident and/or incident of defrauding of money as a result of these fraudulent acts and practices to the authorities in their jurisdiction, i.e. the Police and the Telecommunications regulator, including the Cyber Crime Cell. Please note that any person dealing with such fraudsters will be dealing at his/her own risk, cost and consequences. JioMart and/or any of its Group Companies will not be responsible for any loss suffered or otherwise in this respect.</p>
            </div>
        </div>
        <FooterMain/>
    </div>
  )
}

export default Caution
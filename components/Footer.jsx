import React from 'react';
import { AiFillInstagram, AiOutlinePhone, AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p> 2023 UBTech All rights reserved </p>
      <p className="icons">
        <a href="https://www.instagram.com/rohan_910/" > <AiFillInstagram /> @rohan910 </a>
        {/* <AiFillFacebook /> @rohan910 */}
        <AiOutlinePhone /> 8591042120
      </p>
    </div>
  )
}

export default Footer
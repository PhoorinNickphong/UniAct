import React from 'react';
import './footer.css'
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100090861491854">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/psucoe34/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://line.me/ti/g2/bRDlz7ZlaK2IC7tNRG9jFT27wpJg5OURTvSGgg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">
            <FaLine />
          </a>
        </li>
      </ul>
      <p className="copy-right">&copy; 2023 Uniact. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
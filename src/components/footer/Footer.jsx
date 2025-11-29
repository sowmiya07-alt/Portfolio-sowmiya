import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer__logo">Sowmiya</a>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/sowmiya-suresh-013b31327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
                <a href="https://github.com/sowmiyasuresh" target="_blank" rel="noreferrer" ><FaGithub /></a>
                <a href="https://www.instagram.com/sowmiii_suresh07?igsh=a3Fpd2dxdzZwejlu" target="_blank" rel="noreferrer" ><BsInstagram /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Sowmiya 2024. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
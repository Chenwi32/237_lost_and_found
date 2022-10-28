import styles from './styles/Footer.module.css'

const Footer = () => {
    return (
      <div className={`${styles.footer} flex`}>
        <div className="container">
          <div className="left">
          <div className="social">
            <i className='fa fa-facebok'></i>
          </div>
          <p>Copy<sup>&#x00A9;</sup> right 2022 | All Rights Reserved.</p> 
        </div>
        <div className="right"></div>
      </div>
        </div>
        
    );
}

export default Footer;
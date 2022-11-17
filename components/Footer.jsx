import { Container } from '@chakra-ui/react';
import styles from './styles/Footer.module.css'

const Footer = () => {
    return (
      <Container p={'1rem 0'} maxW={'100%'} className={`${styles.footer} flex`}>
        
        <Container maxW={1200} m={'auto'}>
          <div className="left">
          <div className="social">
            <i className='fa fa-facebok'></i>
          </div>
          <p>Copy<sup>&#x00A9;</sup> right 2022 | 237L&F All Rights Reserved.</p> 
        </div>
        <div className="right"></div>
      </Container>
        </Container>
        
    );
}

export default Footer;
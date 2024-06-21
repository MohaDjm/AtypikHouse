import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f7f7f7;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e0e0e0;

  p {
    margin: 0;
    color: #777;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 AtypikHouse. Tous droits réservés.</p>
    </FooterContainer>
  );
};

export default Footer;

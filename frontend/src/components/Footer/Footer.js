import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Typography, Grid, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LanguageIcon from '@mui/icons-material/Language';

const FooterContainer = styled(Box)`
  background-color: #f8f8f8;
  padding: 4rem 2rem;
  color: #333;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FooterBottomContainer = styled(Box)`
  background-color: #f1f2f2;
  padding: 2rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterSection = styled(Box)`
  margin-bottom: 2rem;
`;

const FooterLink = styled(Link)`
  color: #333;
  text-decoration: none;
  display: block;
  margin: 0.5rem 0;
  &:hover {
    color: #aa6807;
    text-decoration: underline;
  }
`;

const FooterTitle = styled(Typography)`
  margin-bottom: 1rem;
  color: #aa6807;
  font-weight: bold;
  font-size: 1.2rem;
`;

const SocialIcons = styled(Box)`
  display: flex;
  gap: 1rem;
`;

const StyledIconButton = styled(IconButton)`
  color: #333;
  &:hover {
    color: #aa6807;
  }
`;

const HorizontalLinks = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  color: #333;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <FooterSection>
              <FooterTitle variant="h6">Découvrir</FooterTitle>
              <FooterLink to="/what-is-atypikhouse">Qu'est ce que Atypikhouse ?</FooterLink>
              <FooterLink to="/unique-rentals">Des locations atypique</FooterLink>
              <FooterLink to="/destinations">Destinations</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/gift-card">Acheter une carte cadeau</FooterLink>
              <FooterLink to="/signup">S'inscrire ou se connecter</FooterLink>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterSection>
              <FooterTitle variant="h6">AtypikHouse</FooterTitle>
              <FooterLink to="/about">A propos</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/careers">Carriere</FooterLink>
              <FooterLink to="/contact">Contactez-nous</FooterLink>
              <FooterLink to="/cancellation-policy">Politiques d'annulation</FooterLink>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterSection>
              <FooterTitle variant="h6">Hôtes</FooterTitle>
              <FooterLink to="/list-your-property">Inscrivez votre bien</FooterLink>
            </FooterSection>
          </Grid>
        </Grid>
      </FooterContainer>
      <Divider />
      <FooterBottomContainer>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 AtypikHouse International Inc. All rights reserved.
        </Typography>
        <HorizontalLinks>
          <Link to="/terms" style={{ textDecoration: 'none', color: '#333' }}>Terms</Link>
          <Typography variant="body2" color="textSecondary">|</Typography>
          <Link to="/site-map" style={{ textDecoration: 'none', color: '#333' }}>Site Map</Link>
          <Typography variant="body2" color="textSecondary">|</Typography>
          <Link to="/privacy" style={{ textDecoration: 'none', color: '#333' }}>Privacy</Link>
          <Typography variant="body2" color="textSecondary">|</Typography>
          <Link to="/privacy-choices" style={{ textDecoration: 'none', color: '#333' }}>Privacy Choices</Link>
        </HorizontalLinks>
        <SocialIcons>
          <StyledIconButton>
            <FacebookIcon />
          </StyledIconButton>
          <StyledIconButton>
            <InstagramIcon />
          </StyledIconButton>
          <StyledIconButton>
            <TwitterIcon />
          </StyledIconButton>
          <StyledIconButton>
            <PinterestIcon />
          </StyledIconButton>
          <StyledIconButton>
            <LanguageIcon />
          </StyledIconButton>
        </SocialIcons>
        <Typography variant="body2" color="textSecondary" align="center">
          $ USD
        </Typography>
      </FooterBottomContainer>
    </>
  );
};

export default Footer;

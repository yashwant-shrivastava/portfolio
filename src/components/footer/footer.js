import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
    text-align: center;
    padding: 10px 0px;
    background-color: #343a40 !important
`

const FooterDesc = styled.p`
    color: rgba(255,255,255,.5);
`

const Footer = () => {
    return (
        <FooterSection>
            <FooterDesc>
                Copyright &copy; 2020 by Yashwant Shrivastava
            </FooterDesc>
        </FooterSection>
    )
}

export default Footer;
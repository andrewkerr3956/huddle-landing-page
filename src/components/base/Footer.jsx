import styled, {css} from 'styled-components';
import Logo from '../../assets/images/logo.svg';

const FooterLayout = styled.footer`
    box-sizing: border-box;
    background: #ffffff;
    margin: 78px 63px 0 80px;
    display: flex;
    display: -ms-flexbox;
    flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    justify-content: space-between;
    -ms-flex-pack: space-between:
    align-items: center;
    -ms-flex-align: center;
`;

const Footer = (props) => {
    return (
        <FooterLayout>
            <img src={Logo} alt="Huddle Logo" />
        </FooterLayout>
    );
}

export default Footer;
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
import Button from '../styled/Button';

const HeaderLayout = styled.header`
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

const Header = () => {

    return (
        <HeaderLayout>
            <img src={Logo} alt="Huddle Logo" />
            <Button padding="9px 30px" boxShadow>Try It Free</Button>
        </HeaderLayout>
    )
};

export default Header;
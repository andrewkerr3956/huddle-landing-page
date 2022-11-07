import styled, { css } from 'styled-components';
import StyleVars from '../../assets/style-vars';

const Button = styled.button`
    background: ${props => props.primary ? "#FF52C1" : "#FFFFFF"};
    border: ${props => props.primary ? `0px solid #000000` : `1px solid ${StyleVars.colors.pink}`};
    color: ${props => props.primary ? "#FFFFFF" : StyleVars.colors.pink}};
    padding: ${props => props.padding ? props.padding : "0px"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "20px"};
    font-family: ${props => props.fontFamily ? props.fontFamily : "Poppins"};
    font-weight: ${props => props.fontWeight ? (props.fontWeight >= 400 && props.fontWeight <= 700 ? props.fontWeight : "400") : "400"};
    box-shadow: ${props => props.boxShadow ? (props.primary ? "0px 6px 13px rgba(0, 37, 46, 0.223053)" : "box-shadow: 0px 0px 9px rgba(255, 82, 193, 0.218778)" ) : "none"};   
`;

export default Button;
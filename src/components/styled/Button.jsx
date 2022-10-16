import styled, { css } from 'styled-components';
import StyleVars from '../../assets/style-vars';

const Button = styled.button`
    background: ${props => props.primary ? "#FF52C1" : "#FFFFFF"};
    border: ${props => props.primary ? `0px solid #000000` : `1px solid ${StyleVars.colors.pink}`};
    color: ${props => props.primary ? "#FFFFFF" : StyleVars.colors.pink}};
    padding: ${props => props.padding ? props.padding : "0px"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "20px"};
    fontFamily: ${props => props.fontFamily ? props.fontFamily : "Poppins"}
    fontWeight: ${props => props.fontWeight ? (props.fontWeight >= 400 && props.fontWeight <= 700 ? props.fontWeight : "400") : "400"};    
`;

export default Button;
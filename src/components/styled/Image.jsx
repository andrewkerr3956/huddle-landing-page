import styled from "styled-components";

const Image = styled.img`
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
`;

export default Image;
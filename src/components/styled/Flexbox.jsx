import styled, { css } from 'styled-components';
import StyleVars from '../../assets/style-vars';

const Flexbox = styled.div`
    display: flex;
    display: -ms-flexbox;
    ${props => props.auto ? 'flex: 1;' : null}
    ${props => props.flex ? `flex: ${props.flex};` : null}
    flex-flow: ${props => props.direction ? props.direction : "row"} ${props => props.wrap ? props.wrap : "nowrap"};
    -ms-flex-flow: ${props => props.direction ? props.direction : "row"} ${props => props.wrap ? props.wrap : "nowrap"};
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
    -ms-flex-pack: ${props => props.justify ? props.justify : "flex-start"};
    align-items: ${props => props.align ? props.align : "flex-start"};
    -ms-flex-align: ${props => props.align ? props.align : "flex-start"};
`;

export default Flexbox;
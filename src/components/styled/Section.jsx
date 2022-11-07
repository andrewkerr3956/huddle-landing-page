import styled from "styled-components";

const SectionStyles = styled.section`
display: block;
text-align: ${props => props.textAlign ? props.textAlign : "left"};
padding: ${props => props.padding ? props.padding : "0"};
`;

const Section = (props) => {
    return (
        <SectionStyles {...props}>{props.children}</SectionStyles>
    )
}

export default Section;
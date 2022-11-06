import styled from "styled-components";

const SectionStyles = styled.section`
display: block;
margin: 0 120px 0 120px;
text-align: ${props => props.textAlign ? props.textAlign : "left"}
`;

const Section = (props) => {
    return (
        <SectionStyles {...props}>{props.children}</SectionStyles>
    )
}

export default Section;
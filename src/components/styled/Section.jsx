import styled from "styled-components";

const Section = (props) => {
    const SectionStyles = styled.section`
    display: block;
    padding: 0 120px 0 120px;
`;

    return (
        <SectionStyles id={props.id ? props.id : null}>{props.children}</SectionStyles>
    )

}

export default Section;
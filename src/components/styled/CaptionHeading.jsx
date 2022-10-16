import styled from "styled-components";

const CaptionHeading = (props) => {

    const CaptionStyles = styled.div`
        font-size: ${props.size ? props.size : "40px"};
    `;

    return (
        <CaptionStyles>{props.children}</CaptionStyles>
    )
};

export default CaptionHeading;

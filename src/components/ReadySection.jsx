import CaptionHeading from "./styled/CaptionHeading";
import Button from "./styled/Button";

const ReadySection = (props) => {
    return (
        <>
            <CaptionHeading>Ready To Build Your Community?</CaptionHeading>
            <Button primary padding={"25px 100px"} borderRadius={"40px"} boxShadow>Get Started For Free</Button>
        </>
    );
};

export default ReadySection;
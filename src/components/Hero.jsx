import Button from "./styled/Button";
import ScreenMockups from '../assets/images/screen-mockups.svg';
import CaptionHeading from "./styled/CaptionHeading";

const Hero = (props) => {
    return (
        <>
            <CaptionHeading size="3.43rem">Build The Community Your Fans Will Love</CaptionHeading>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
            <Button primary padding="25px 100px" borderRadius="40px">Get Started For Free</Button>
            <img src={ScreenMockups} alt="Screen mockups" />
        </>
    );
}

export default Hero;
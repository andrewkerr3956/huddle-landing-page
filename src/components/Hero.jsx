import Button from "./styled/Button";
import ScreenMockups from '../assets/images/screen-mockups.svg';
import CaptionHeading from "./styled/CaptionHeading";
import Image from "./styled/Image";

const Hero = (props) => {
    return (
        <>
            <CaptionHeading size="3.43rem">Build The Community Your Fans Will Love</CaptionHeading>
            <p id="hero-description">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
            <Button primary padding="25px 100px" borderRadius="40px" boxShadow>Get Started For Free</Button>
            <Image style={{marginTop: '120px'}} src={ScreenMockups} alt="Screen mockups" width="100%" />
        </>
    );
}

export default Hero;
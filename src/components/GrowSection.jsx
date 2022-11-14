import GrowIllustration from '../assets/images/illustration-grow-together.svg';
import CaptionHeading from './styled/CaptionHeading';
import Flexbox from './styled/Flexbox';
import DesktopBgTop from '../assets/images/bg-section-top-desktop-1.svg';
import MobileBgTop from '../assets/images/bg-section-top-mobile-1.svg';
import DesktopBgBottom from '../assets/images/bg-section-bottom-desktop-1.svg';
import MobileBgBottom from '../assets/images/bg-section-bottom-mobile-1.svg';
import Container from './styled/Container';

const GrowSection = (props) => {
    return (
        <>
            <picture style={{ width: '100%' }}>
                <source media="(max-width: 600px)" srcSet={MobileBgTop} />
                <img src={DesktopBgTop} alt="" />
            </picture>
            <Container style={{ backgroundColor: '#F6FBFF', marginTop: '-2px' }}>
                <Flexbox style={{ padding: "130px 0", overflow: 'hidden', boxSizing: 'border-box' }} align="center" justify="space-between" auto>
                    <div style={{width: '45%'}}>
                        <CaptionHeading>Grow Together</CaptionHeading>
                        <p style={{marginTop: '26px', width: '70%'}}>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                    </div>
                    <div style={{width: '45%'}}>
                        <img src={GrowIllustration} width="100%" height="auto" alt="Two people standing in front of forum conversations in the background" />
                    </div>
                </Flexbox>
            </Container>
            <picture>
                <source media="(max-width: 600px)" srcSet={MobileBgBottom} />
                <img src={DesktopBgBottom} alt="" />
            </picture>
        </>
    );
};

export default GrowSection;
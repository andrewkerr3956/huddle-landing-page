import GrowIllustration from '../assets/images/illustration-grow-together.svg';
import CaptionHeading from './styled/CaptionHeading';

const GrowSection = (props) => {
    return (
        <>
            <div>
                <img src={GrowIllustration} alt="Two people standing in front of forum conversations in the background" />
                <div>
                    <CaptionHeading>Grow Together</CaptionHeading>
                    <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                </div>
            </div>
        </>
    );
};

export default GrowSection;
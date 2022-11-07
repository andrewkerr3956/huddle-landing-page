import CommunitiesIcon from '../assets/images/icon-communities.svg';
import MessagesIcon from '../assets/images/icon-messages.svg';
import CaptionHeading from './styled/CaptionHeading';
import Flexbox from './styled/Flexbox';

const Diagram = (props) => {
    return (
        <Flexbox style={{padding: "0 200px"}} align="center" justify="space-between">
            <figure>
                <img src={CommunitiesIcon} />
                <figcaption>
                    <CaptionHeading size="6.86rem">1.4k+</CaptionHeading>
                    <div>Communities formed</div>
                </figcaption>
            </figure>
            <figure>
                <img src={MessagesIcon} />
                <figcaption>
                    <CaptionHeading size="6.86rem">2.7m+</CaptionHeading>
                    <div>Messages sent</div>
                </figcaption>
            </figure>
        </Flexbox>
    );
};

export default Diagram;
import CommunitiesIcon from '../assets/images/icon-communities.svg';
import MessagesIcon from '../assets/images/icon-messages.svg';
import CaptionHeading from './styled/CaptionHeading';

const Diagram = (props) => {
    return (
        <>
            <figure>
                <img src={CommunitiesIcon} />
                <figcaption>
                    <CaptionHeading size="90px">1.4k+</CaptionHeading>
                    <div>Communities formed</div>
                </figcaption>
            </figure>
            <figure>
                <img src={MessagesIcon} />
                <figcaption>
                    <CaptionHeading size="90px">2.7m+</CaptionHeading>
                    <div>Messages sent</div>
                </figcaption>
            </figure>
        </>
    );
};

export default Diagram;
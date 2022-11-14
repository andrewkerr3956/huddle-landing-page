import CaptionHeading from './styled/CaptionHeading';
import Container from './styled/Container';
import Flexbox from './styled/Flexbox';
import ConversationIllustration from '../assets/images/illustration-flowing-conversation.svg';

const ConversationSection = (props) => {
    return (
        <Container>
            <Flexbox style={{ padding: '103px 0 20px 0' }} align="center" justify="space-between" auto>
                <div style={{ width: '45%' }}>
                    <img src={ConversationIllustration} width="100%" height="auto" alt="Four people sitting down at a table talking to each other." />
                </div>
                <div style={{ width: '45%' }}>
                    <CaptionHeading>Flowing Conversations</CaptionHeading>
                    <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
                </div>
            </Flexbox>
        </Container>
    );
};

export default ConversationSection;
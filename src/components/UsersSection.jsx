import UsersIllustration from '../assets/images/illustration-your-users.svg';
import CaptionHeading from './styled/CaptionHeading';

const UsersSection = (props) => {
    return (
        <>
            <div>
                <img src={UsersIllustration} alt="Multiple people holding a sign resmbling a comment." />
                <div>
                    <CaptionHeading>Your Users</CaptionHeading>
                    <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                </div>
            </div>
        </>
    );
};

export default UsersSection;
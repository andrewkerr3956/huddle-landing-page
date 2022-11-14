import styled, {css} from 'styled-components';

const MainLayout = styled.main`
    width: 100%;
`;

const Main = ({children}) => {
    return (
        <MainLayout>{children}</MainLayout>
    )
}

export default Main;
import styled, {css} from 'styled-components';

const MainLayout = styled.main`
    padding: 0 80px;
`;

const Main = ({children}) => {
    return (
        <MainLayout>{children}</MainLayout>
    )
}

export default Main;
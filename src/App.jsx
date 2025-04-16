// import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled, { css } from 'styled-components';



const flexMixin = ({
  justify = 'flex-start',
  align = 'stretch',
  gap = '0',
  wrap = 'nowrap'
  
}) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
  flex-wrap: ${wrap};
`;



let StyledSection = styled.section`
${flexMixin({ justify: 'center', align: 'center', gap: '20px', wrap: 'wrap' })};
  padding: 20px 40px;
`;

function App() {
  return (
    <main>
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;

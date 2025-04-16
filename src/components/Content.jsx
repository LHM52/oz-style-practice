import styled, { css } from 'styled-components';

let tagColor = '#d7fa00';
let gray = 'rgb(160, 160, 160)';


const flexMixin = ({
  justify = 'flex-start',
  align = 'stretch',
  gap = '0',
  wrap = 'nowrap',
  direction = 'row'
}) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
  flex-wrap: ${wrap};
  flex-direction: ${direction};
`;

const fontMixin = ({
  size,
  weight = 400
}) => css`
  font-size: ${size};
  font-weight: ${weight};
`

const ContentContainer = styled.div`
  ${flexMixin({
  direction: 'column',
  align: 'flex-start',
  gap: '5px'
})};
  
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${fontMixin({ size: '12px' })};
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${fontMixin({ size: '18px', $weight: 600 })};
  }
  p {
    ${fontMixin({ $size: '12px' })};
    color: ${gray};
  }
`

export default function Content({ content }) {
  return (

    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>

  );
}

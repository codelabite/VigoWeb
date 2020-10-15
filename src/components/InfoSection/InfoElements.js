import styled from "styled-components";

export const InfoContainer = styled.div`
  /* color: white; */
  background: ${({ lightBg }) => (lightBg ? "white" : "#010606")};
  /* "f9f9f9" */
  margin: auto;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  margin-top: 0px;
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  margin: auto;

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 ' 'col2' ` : `'col1 col1' 'col2 col2' `};
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#7F8F8" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 20px;
  line-height: 1;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  /* height: 60%; */

  margin-top: 0rem !important;
  margin: auto;
  align-items: center;
  justify-items: center;
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 0rem;
  padding-right: 0;
  margin: 0;
  height: 100%;
  display: block;

  @media screen and (max-width: 480px) {
    margin: auto;
  }
`;

export const Vid = styled.video`
  border-radius: 10px;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 760px) {
    margin-top: 5rem;
    margin-bottom: 0rem;
    /* margin: auto; */
  }
`;

// export const Column2 = styled.div`
//   margin-bottom: 0px;
//   padding: 0 15px;
//   grid-area: col2;
//   background-color: blue;

// `;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0;
  grid-area: col1;
  margin-left: 0;
`;

export const Column2 = styled.div`
  margin-top: -18rem;
  height: 70%;
  padding: 0;
  grid-area: col2;
  margin-left: 0;
  align-items: center;
  justify-items: center;
  justify-content: center;
  flex-direction: flex-start;

  @media screen and (max-width: 760px) {
    margin-top: -0rem;
    margin-bottom: 28rem;

    /* margin: auto; */
  }
`;

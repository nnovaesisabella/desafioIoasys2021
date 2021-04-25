import styled from 'styled-components';

export const ContentBookList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  gap: 16px;
  min-height: (100vh - 70px);
  padding: 0px 105px 0 100px;
  text-align: center;

  @media (max-width: 755px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    padding: 50px;
  }
`;

export const CardBook = styled.div`
  background: #ffffff;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(84, 16, 95, 0.13);

  -webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.3);
  -moz-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.3);
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.3);

  :hover {
    opacity: 0.5;
  }
`;

export const ImgBook = styled.div`
  width: 113px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 21;
`;

export const Img = styled.img`
  width: 81px;
  height: 112px;
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 80%;
  padding: 5px;
`;

export const Information = styled.div`
  h5 {
    font-family: bold;
  }

  p {
    font-size: 0.5rem;
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #333333;
  font-weight: bold;
  margin-top: 6px;
`;

export const AuthorBooks = styled.p`
  color: #ab2680;
  font-size: 0.75rem;
  font-weight: bold;
`;
export const NumberPages = styled.p`
  color: #999999;
  font-weight: 600;
  margin-top: 18px;
  font-size: 0.75rem;
`;

export const EditionBooks = styled.p`
  color: #999999;
  font-weight: 600;
  font-size: 0.75rem;
`;
export const PublishingBooks = styled.p`
  color: #999999;
  font-weight: 600;
  font-size: 0.75rem;
`;

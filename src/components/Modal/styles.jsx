import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  background-size: auto 100%;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 35;
  margin: auto;
  overflow-y: auto;

  @media (max-width: 1050px) {
    height: 1380px;
  }

  @media (max-width: 700px) {
    height: 1480px;
  }

  @media (max-width: 563px) {
    height: 2900px;
  }
`;

export const MondalContent = styled.div`
  width: 700px;
  height: 528px;
  background: #ffffff;
  display: flex;
  position: absolute;
  z-index: 1;
  border-radius: 10px;
  margin: auto;
  align-items: center;
  padding: 2rem 2rem;

  @media (max-width: 1024px) {
    height: auto;
    margin: auto;
    justify-content: center;
  }
  @media (max-width: 795px) {
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 563px) {
    margin-top: -350px;
  }

  @media (max-width: 420px) {
    height: auto;
    width: 90%;
  }
`;
export const ImgBook = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0 0.85rem;
`;
export const Img = styled.img`
  width: 249;

  @media (max-width: 812px) {
    grid-template-columns: 1fr;
    width: 50%;
    height: 80%;
  }

  @media (max-width: 411px) {
    margin-top: 15px;
  }
`;

export const DescriptionBook = styled.div`
  width: 100%;
  padding: 2rem 2rem;

  @media (max-width: 812px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentDescription = styled.div`
  width: 400px;
  overflow-y: scroll;
  padding: 0 1rem;

  @media (max-width: 500px) {
    padding: 0 3rem;
  }
`;

export const TitleBook = styled.h2`
  font-size: 1.75rem;
  margin-top: 2rem;
  color: #333333;
`;
export const Author = styled.div`
  font-size: 0.75rem;
  color: #ab2680;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Information = styled.div`
  margin-top: 32px;

  h5 {
    font-weight: 700;
    padding-bottom: 15px;
    font-size: 0.75rem;
  }

  p {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 0.75rem;
  }

  span {
    color: #999999;
    font-weight: 600;
    font-size: 0.75rem;
  }
`;
export const DetailsBook = styled.div`
  margin-top: 32px;
  padding-bottom: 51px;

  height: 150px;

  h3 {
    font-size: 0.75rem;
    padding-bottom: 15px;
    font-weight: 800;
    color: #333333;
  }

  img {
    padding-right: 10px;
  }

  p {
    font-size: 0.75rem;
    color: #999999;
    font-weight: 600;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: auto;
  z-index: 999;
  top: 35px;
  right: 67px;
  margin-left: auto;

  @media (max-width: 1024px) {
    position: absolute;
    top: 285px;
  }

  @media (max-width: 563px) {
    margin-top: 420px;
    right: 20px;
  }
`;

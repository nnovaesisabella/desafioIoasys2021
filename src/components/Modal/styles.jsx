/* eslint-disable */
import styled from 'styled-components';

export const ModalContainer = styled.div`

 width:100%;
 height:100%;
 background: rgba(0, 0, 0, 0.8);
 position:absolute;
 top:0;
 left:0;
 display:flex;
 justify-content:center;
 align-items:center;
`;

export const MondalContent = styled.div`
   width: 769px;
   height: 608px;
   background: #ffffff;
   display: grid;
   grid-template-columns: 1fr 1fr;
   position:relative;
   z-index:10;
   border-radius:10px;

`;
export const ImgBook = styled.div`
   width:100%;
   height: 100%;
   justify-content:center;
   display: flex;
   align-items:center;

`;
export const Img = styled.img`
  height: 512.29px;
  width:349;

`;

export const DescriptionBook = styled.div`
  overflow: auto;
  width:96%;

`;

export const ContentDescription = styled.div`
  width:276px;
`;

export const TitleBook = styled.h2`
  font-size:1.75rem;
  margin-top:48px;
  color: #333333;




`;
export const Author = styled.div`
 font-size: 0.75rem;
 color:#AB2680;
 font-weight:bold;


`;
export const Information = styled.div`
margin-top: 32px;

h5{
  font-weight:700;
  padding-bottom: 15px;
  font-size: 0.75rem;
}

p{
  display:flex;
  justify-content:space-between;
  font-weight:700;
  font-size: 0.75rem;
}

span{
  color: #999999;
  font-weight:600;
  font-size: 0.75rem;
}

`;
export const DetailsBook = styled.div`
  margin-top: 32px;
  padding-bottom:51px;


  h3{
    font-size: 0.75rem;
    padding-bottom:15px;
    font-weight: 800;
    color: #333333;
  }

img{
  padding-right:10px;
}

p{
  font-size: 0.75rem;
  color: #999999;
  font-weight:600;

}

`;


export const CloseButton = styled.button`
   cursor:pointer;
   position: absolute;
   width:32px;
   height:32px;
   border-radius:50%;
   z-index:999;
   top: 16px;
   right:17px;


 `;

export const ImgClose = styled.img``;

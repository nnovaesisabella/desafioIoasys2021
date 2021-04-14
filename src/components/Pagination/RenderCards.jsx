/* eslint-disable */
import React from 'react';
import P from 'prop-types';
const {
  CardBook,
  ImgBook,
  PublishingBooks,
  Img,
  ContentDescription,
  Title,AuthorBooks,
  NumberPages,
  EditionBooks,
  } = './Styles';

export const renderCards = (posts,openModal) => {
  return (
    <>
        {posts.map((item, index) => {
          return (
            <CardBook key={index}  idItem={item.id} onClick={openModal}>
            <ImgBook>
              <Img src={item.imgUrl} alt={item.title} />
            </ImgBook>
            <ContentDescription>
              <Title> {item.title}</Title>
              <AuthorBooks> {item.author} </AuthorBooks>
              <NumberPages> {item.pages} páginas</NumberPages>
              <EditionBooks> {item.edit}</EditionBooks>
              <PublishingBooks> {item.publish}</PublishingBooks>
            </ContentDescription>
          </CardBook>
          );
        })}

    </>
  );
};

renderCards.propTypes = {
  posts:P.array,
  openModal:P.func
}

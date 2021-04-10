/* eslint-disable */

import React, { useEffect, useState } from "react";
import {Api} from '../../services/api'
import {
  Paginator,
  ContainerBooksList,
  CardBook,
  ImgBook,
  Img,
  ContentDescription,
  Title,
  AuthorBooks,
  NumberPages,
  EditionBooks,
  Button,
  Pages,
  PublishingBooks,
} from "./styles";
import BookImg from "../../assets/images/bookcrossi.png";
import P from "prop-types";
import { Modal } from "../../components/Modal";
import { Link } from "react-router-dom";
export const data = [
  {
    id: 1,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 2,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 3,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 4,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 5,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 6,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 7,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 8,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 9,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 10,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 11,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  {
    id: 12,
    imgUrl: BookImg,
    title: "Crossing the Chasm ",
    author: "Geoffrey A.Moore",
    pages: 150,
    edit: "Editora Loyola",
    publish: "Publicado em 2020",
  },
  // {
  //   id: 13,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 14,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 15,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 16,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 17,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 18,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 19,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 20,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 21,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 22,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 23,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
  // {
  //   id: 24,
  //   imgUrl: BookImg,
  //   title: "Crossing the Chasm ",
  //   author: "Geoffrey A.Moore",
  //   pages: 150,
  //   edit: "Editora Loyola",
  //   publish: "Publicado em 2020",
  // },
];

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const ContainerBooks = () => {
  //Pagination
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);









  //Modal Description

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

const loadBooks = async ()=>{
  Api.get('')
}



  useEffect(() => {



    setPosts(data);
    setLoading(data.length > 0);
  }, []);

  return (
    <ContainerBooksList>
      {posts && loading && <h2>Loading...</h2> ? (
        posts?.map((item) => (
          <CardBook idItem={item.id} onClick={openModal}>
            <ImgBook>
              {" "}
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
        ))
      ) : (
        <h1>Post não encontrados</h1>
      )}
 <Paginator><h1>{1} de {data.length}</h1></Paginator>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </ContainerBooksList>
  );
};

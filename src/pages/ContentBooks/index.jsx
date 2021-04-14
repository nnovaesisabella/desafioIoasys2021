/* eslint-disable */

import React, { useEffect, useState } from "react";
import {
  ContainerBooksList,
  CardBook,
  ImgBook,
  Img,
  ContentDescription,
  Title,
  AuthorBooks,
  NumberPages,
  EditionBooks,
  PublishingBooks,
} from "./styles";


import { Modal } from "../../components/Modal";
import {Paginator} from '../../components/Pagination';


export const data = [
{
    id: 1,
    imgUrl: 'https://files-books.ioasys.com.br/Book-5.jpg',
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },


  {
    id: 2,
    imgUrl:"https://files-books.ioasys.com.br/Book-6.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 3,
    imgUrl: "https://files-books.ioasys.com.br/Book-10.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 4,
    imgUrl: "https://files-books.ioasys.com.br/Book-2.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 5,
    imgUrl: "https://files-books.ioasys.com.br/Book-3.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 6,
    imgUrl: "https://files-books.ioasys.com.br/Book-6.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 7,
    imgUrl: "https://files-books.ioasys.com.br/Book-0.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 8,
    imgUrl: "https://files-books.ioasys.com.br/Book-4.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 9,
    imgUrl: "https://files-books.ioasys.com.br/Book-10.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 10,
    imgUrl: "https://files-books.ioasys.com.br/Book-10.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 11,
    imgUrl: "https://files-books.ioasys.com.br/Book-2.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 12,
    imgUrl: "https://files-books.ioasys.com.br/Book-2.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 13,
    imgUrl: "https://files-books.ioasys.com.br/Book-8.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 14,
    imgUrl: "https://files-books.ioasys.com.br/Book-1.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 15,
    imgUrl: "https://files-books.ioasys.com.br/Book-8.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 16,
    imgUrl: "https://files-books.ioasys.com.br/Book-3.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 17,
    imgUrl: "https://files-books.ioasys.com.br/Book-6.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 18,
    imgUrl: "https://files-books.ioasys.com.br/Book-7.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 19,
    imgUrl: "https://files-books.ioasys.com.br/Book-10.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 20,
    imgUrl: "https://files-books.ioasys.com.br/Book-1.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 21,
    imgUrl: "https://files-books.ioasys.com.br/Book-10.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 22,
    imgUrl: "https://files-books.ioasys.com.br/Book-1.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 23,
    imgUrl: "https://files-books.ioasys.com.br/Book-9.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
  {
    id: 24,
    imgUrl: "https://files-books.ioasys.com.br/Book-0.jpg",
    title: "Aut",
    author: "Lorraine Barros ",
    pages: 965,
    edit: "Editora Loyola",
    publish: 2019,
    language: "Português",
    isbn10: "3355205900",
    isbn13: "112-3355205900",
    description: "Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.",
  },
];

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;



const renderData = (data,openModal) => {
  return (
    <>
        {data.map((item, index) => {
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










export const ContainerBooks = () => {
  //Pagination
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);



//A pagina que você está
const [currentPage, setCurrentPage] = useState(1);
//Quantidade de items por pagina
const [itemsPerPage, setItemsPerPage] = useState(12);

const [pageNumberLimit, setPageNumberLimit] = useState(5);
const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

const pages = [];

for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
  pages.push(i);
}

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

const handleClick = (event) => {
  setCurrentPage(Number(event.target.id));
};

const renderPeraPageNumbers = pages.map((number) =>
  number < maxPageNumberLimit + 1 && number > minPageNumberLimit ? (
    <li key={number} id={number} onClick={handleClick} className={currentPage == number ? 'active' : null}>
      {number}
    </li>
  ) : null,
);

  //Modal Description

  const openModal = () => {
    setShowModal((prev) => !prev);
  };






  useEffect(() => {
    setPosts(data);
    setLoading(data.length > 0);
  }, []);


  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage + 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  return (
    <ContainerBooksList>
        {renderData(currentItems,openModal)}
 <Paginator
 posts={posts}
 currentPage={currentPage}
 pages={pages}
  renderPeraPageNumbers={renderPeraPageNumbers}
  handlePrevBtn={handlePrevBtn}
   handleNextBtn={handleNextBtn}/>
      <Modal showModal={showModal} setShowModal={setShowModal}  />
    </ContainerBooksList>
  );
};

/* eslint-disable */
import React from 'react';
import P from 'prop-types';
import {
  PaginationRouter,
  BtnPrev,
  BtnNext,
  ListItems } from './Styles';
export function Paginator({ renderPeraPageNumbers,handleNextBtn , currentPage, pages, handlePrevBtn, posts}) {
	return (
		<PaginationRouter>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<h5>{currentPage}</h5> &nbsp;<h5>de</h5>&nbsp; <h5>{posts.length}</h5>
			</div>
			<div style={{ display: 'none' }}>
				<ListItems className="ListItmes">{renderPeraPageNumbers}</ListItems>
			</div>
			<BtnPrev disabled={currentPage === pages[0] ? true : false} onClick={handlePrevBtn}>
				Prev
			</BtnPrev>
			<BtnNext disabled={currentPage === pages[pages.length - 1] ? true : false} onClick={handleNextBtn}>
				Next
			</BtnNext>
		</PaginationRouter>
	);
}

Paginator.protoType = {
	renderPeraPageNumbers: P.node,
	currentPage: P.number,
	pages: P.array,
	handlePrevBtn: P.func,
  handleNextBtn :P.func,
  posts:P.array
};

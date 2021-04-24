/* eslint-disable */
import React from 'react';
import P from 'prop-types';
import Back from '../../assets/image/left-arrow.png';
import Next from '../../assets/image/next.png';
import {
  PaginationRouter,
  BtnPrev,
  BtnNext,
   } from './style';
export const  Paginator = ({ handleNextBtn , currentPage, pages, handlePrevBtn, posts}) => {
	return (
		<PaginationRouter>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<h5>{currentPage}</h5> &nbsp;<h5>de</h5>&nbsp; <h5>{posts.length}</h5>
			</div>
			
			<BtnPrev disabled={currentPage === pages[0] ? true : false} onClick={handlePrevBtn}>
                <img src={Back} alt={Back}/>
			</BtnPrev>
			<BtnNext disabled={currentPage === pages[pages.length - 1] ? true : false} onClick={handleNextBtn}>
                <img src={Next} alt={Next}/>
			</BtnNext>
		</PaginationRouter>
	);
}

Paginator.protoType = {
	currentPage: P.number,
	pages: P.array,
	handlePrevBtn: P.func,
  handleNextBtn :P.func,
  posts:P.array
};

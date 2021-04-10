/* eslint-disable */

import styled from 'styled-components';

export const ContainerBooksList = styled.div`
	width: 100%;
	height: 512px;
	margin-left: 115px;
	margin-right: 114px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 16px;
`;

export const Paginator = styled.div`
	display: flex;
	align-items: center;
`;
export const Pages = styled.div`
	display: flex;
	font-size: 20px;
	margin-left: 20px;
`;

export const Button = styled.button`border-radius: 6px; background:#eee; padding:5px;margin-left:12px; border:solid 1px black;`;

export const CardBook = styled.div`
	width: 272px;
	height: 160px;
	display: flex;
	background: #ffffff;
	box-shadow: rgba(84, 16, 95, 0.13);
	justify-content: center;
	cursor: pointer;

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
`;
export const Title = styled.p`
	font-size: 1rem;
	color: #333333;
	font-weight: bold;
	margin-top: 16px;
`;
export const AuthorBooks = styled.p`
	color: #ab2680;
	font-size: 0.75rem;
	font-weight: bold;
`;
export const NumberPages = styled.p`
	color: #999999;
	font-weight: 600;
	margin-top: 28px;
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

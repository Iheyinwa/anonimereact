import styled from 'styled-components';
export const MovieContainer = styled.main`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-column-gap: 18px;
	position: relative;
	width: 100%;

	//Mobile Devices
	@media only screen and (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 60px;
	}
	//Tablet Devices
	@media (min-width: 601px) and (max-width: 870px) {
		grid-template-columns: repeat(3, 1fr);
		grid-row-gap: 60px;
	}

	@media (min-width: 871px) and (max-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
		grid-row-gap: 60px;
	}
`;
export const MovieCard1 = styled.div`
	padding: 8px;
	width: 100%;
	height: 280px;
	position: relative;
	border-radius: 12px;
`;
export const MovieText = styled.div`
	position: absolute;
	top: 83%;
	left: 16px;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	text-decoration: none;
`;
export const DarkText = styled(MovieCard1)`
background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%);
width: 83%;
height: 70%;
position: absolute;
bottom: 2.5%;

`;
export const StyledMovieImg = styled.img`
	border-radius: 12px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

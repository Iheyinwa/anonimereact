import styled from 'styled-components';
import { StyledH3 } from '../Header/Header.styles';

export const StyledHero = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;
export const Paragraph = styled.p`color: #868686;`;

export const HeroText = styled.div`
	position: absolute;
	bottom: 0%;
	width: 50%;
	padding: 30px;

	@media (max-width: 870px) {
		width: stretch;
		padding: 8px;
	}
`;
export const HeroParagraph = styled.p`
	line-height: 25px;
	@media (max-width: 870px) {
		line-height: normal;
	}
`;

export const SectionTitle = styled.h3`
	font-size: 30px;
	@media (max-width: 870px) {
		font-size: 16px;
		width: 100%;
	}
`;

export const DarkGradient = styled(StyledHero)`
	border-radius: 12px;
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0%;
	background: linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%);
`;
export const Search = styled.input`
	background-color: #374151;
	border: 1px solid #374151;
	border-radius: 40px;
	width: 96%;
	padding: 10px;
	text-align: left;
	color: #868686;
	font-weight: 400;
	margin-bottom: 10px;

	@media (min-width: 870px) {
		display: none;
	}
`;

export const HeroH3 = styled(StyledH3)`
@media (max-width: 500px){
	font-size: 16px;
}
`;
export const StyledHeroImg = styled.img`
	border-radius: 12px;
	width: 100%;
	object-fit: contain;
`;

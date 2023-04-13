import { SectionTitle } from '../Explore/Explore.styles';
import { DarkText, MovieCard1, MovieContainer, MovieText, StyledMovieImg } from './Release.styles';
import OnePiece from '../../images/one-piece.jpeg';
import Boruto from '../../images/boruto.jpeg';
import Spy from '../../images/spycard.jpeg';
import AttackOnTitan from '../../images/attackontitan.png';
import CaptainTsu from '../../images/captsu.jpeg';
import Aoashi from '../../images/aoashi.jpeg';
import { Link } from 'react-router-dom';

const titles = [
	{
		id: 1,
		src: OnePiece,
		name: 'One Piece',
		episode: 'Episode 1018'
	},
	{
		id: 2,
		src: Boruto,
		name: 'Boruto Naruto Next Generations',
		episode: 'Episode 250'
	},
	{
		id: 3,
		src: Spy,
		name: 'Spy X Family',
		episode: 'Episode 7'
	},
	{
		id: 4,
		src: AttackOnTitan,
		name: 'Shingeki no kyoujin',
		episode: 'Episode 28'
	},
	{
		id: 5,
		src: CaptainTsu,
		name: 'Captain Tsubasa',
		episode: 'Episode 28'
	},
	{
		id: 6,
		src: Aoashi,
		name: 'Aoashi',
		episode: 'Episode 28'
	}
];

export default function Release() {
	return (
		<section>
			<SectionTitle>New Release</SectionTitle>
			<MovieContainer>
				{titles.map((title) => (
					<Link href={`/anime/${title.id}/?${title.name}`} key={title.id}>
						<MovieCard1>
							<StyledMovieImg src={title.src} alt="One-piece" />
							<DarkText />
							<MovieText>
								<p>{title.episode}</p> <p>{title.name}</p>
							</MovieText>
						</MovieCard1>
					</Link>
				))}
			</MovieContainer>
		</section>
	);
}

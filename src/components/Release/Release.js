import { SectionTitle } from '../Explore/Explore.styles';
import { DarkText, MovieCard1, MovieContainer, MovieText, StyledMovieImg } from './Release.styles';
// import OnePiece from '../../images/one-piece.jpeg';
// import Boruto from '../../images/boruto.jpeg';
// import Spy from '../../images/spycard.jpeg';
// import AttackOnTitan from '../../images/attackontitan.png';
// import CaptainTsu from '../../images/captsu.jpeg';
// import Aoashi from '../../images/aoashi.jpeg';
import { Link } from 'react-router-dom';
import { RELEASE_API, IMAGE_API } from '../../api/route';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchReleases = () => {
	return axios.get(RELEASE_API);
};

// const titles = [
// 	{
// 		id: 1,
// 		src: OnePiece,
// 		name: 'One Piece',
// 		episode: 'Episode 1018'
// 	},
// 	{
// 		id: 2,
// 		src: Boruto,
// 		name: 'Boruto Naruto Next Generations',
// 		episode: 'Episode 250'
// 	},
// 	{
// 		id: 3,
// 		src: Spy,
// 		name: 'Spy X Family',
// 		episode: 'Episode 7'
// 	},
// 	{
// 		id: 4,
// 		src: AttackOnTitan,
// 		name: 'Shingeki no kyoujin',
// 		episode: 'Episode 28'
// 	},
// 	{
// 		id: 5,
// 		src: CaptainTsu,
// 		name: 'Captain Tsubasa',
// 		episode: 'Episode 28'
// 	},
// 	{
// 		id: 6,
// 		src: Aoashi,
// 		name: 'Aoashi',
// 		episode: 'Episode 28'
// 	}
// ];

export default function Release() {
	const { isInitialLoading, data } = useQuery({
		queryKey: [ 'Release Details' ],
		queryFn: fetchReleases
	});

	if (isInitialLoading) {
		return <h3>Loading...</h3>;
	}

	return (
		<section>
			<SectionTitle>New Release</SectionTitle>
			<MovieContainer>
				{data.data.results.map((result) => (
					<Link
						to={`/anime/${result.id}`}
						key={result.id}
						state={{
							id: result.id,
							name: result.name != null ? `${result.name}` : `${result.title}`,
							overview: result.overview,
							relaesedDate: result.release_date,
							type: result.media_type,
							poster: `${IMAGE_API}${result.poster_path}`
						}}
					>
						<MovieCard1>
							<StyledMovieImg src={`${IMAGE_API}${result.poster_path}`} alt="One-piece" />
							<DarkText />
							<MovieText>
								<p>{result.title || result.name}</p>
							</MovieText>
						</MovieCard1>
					</Link>
				))}
			</MovieContainer>
		</section>
	);
}
//poster: [ ...IMAGE_API, result.poster_path ]

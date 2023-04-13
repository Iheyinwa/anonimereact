import { SectionTitle } from '../Explore/Explore.styles';
import { PopularCard, PopularCardImage, PopularContainer, PopularMovies } from './PopularAnime.styles';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { POPULAR_API, IMAGE_API } from '../../api/route';
import { useLocation } from 'react-router-dom';

const fetchPopular = () => {
	return axios.get(POPULAR_API);
};

export default function PopularAnime() {
	const location = useLocation();
	console.log(location.state);
	const { isInitialLoading, data } = useQuery({
		queryKey: [ 'Popular' ],
		queryFn: fetchPopular()
	});

	if (isInitialLoading) {
		return <h3>Loading...</h3>;
	}

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
	return (
		<PopularContainer>
			<SectionTitle>Popular Anime</SectionTitle>
			<PopularMovies onClick={onclick}>
				{data.data.results.map((result) => (
					<Link to="/anime/:animeId/" key={result.id}>
						<PopularCard>
							<PopularCardImage src={`${IMAGE_API}${result.poster_path}`} alt="One-piece" />
						</PopularCard>
					</Link>
				))}
			</PopularMovies>
		</PopularContainer>
	);
}

import { SectionTitle } from '../Explore/Explore.styles';
import { PopularCard, PopularCardImage, PopularContainer, PopularMovies } from './PopularAnime.styles';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { POPULAR_API, IMAGE_API } from '../../api/route';

const fetchPopular = () => {
	return axios.get(POPULAR_API);
};

export default function PopularAnime() {
	const { isInitialLoading, data } = useQuery({
		queryKey: [ 'Popular' ],
		queryFn: fetchPopular
	});

	if (isInitialLoading) {
		return <h3>Loading...</h3>;
	}

	return (
		<PopularContainer>
			<SectionTitle>Popular Anime</SectionTitle>
			<PopularMovies>
				{data.data.results.map((result) => (
					<Link
						to={`/anime/${result.id}`}
						key={result.id}
						state={{
							id: result.id,
							name: result.title,
							overview: result.overview,
							relaesedDate: result.release_date,
							type: 'Movie',
							poster: `${IMAGE_API}${result.poster_path}`
						}}
					>
						<PopularCard>
							<PopularCardImage src={`${IMAGE_API}${result.poster_path}`} alt={result.title} />
						</PopularCard>
					</Link>
				))}
			</PopularMovies>
		</PopularContainer>
	);
}

// poster: [ ...IMAGE_API, result.poster_path ]

import { SectionTitle } from '../Explore/Explore.styles';
import {
	StreamContainer,
	DetailContainer,
	MovieDetails,
	SynopsisContainer,
	SynopsisContent,
	SynopsisHeader
} from './StreamingAnime.styles';
import OnePiece from '../../images/one-piece.jpeg';
import { PopularCard, PopularCardImage } from '../Popular Anime/PopularAnime.styles';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { API_KEY, API_URL, IMAGE_API } from '../../api/route';

// const fetchAnime = () => {
// 	return axios.get(`${API_URL}movie/500?api_key=${API_KEY}`);
// };

export default function StreamingAnime() {
	// const { isInitialLoading, data } = useQuery({
	// 	queryKey: [ 'Anime Details' ],
	// 	queryFn: fetchAnime
	// });

	// if (isInitialLoading) {
	// 	return <h3>Loading...</h3>;
	// }

	const title = {
		id: 1,
		src: OnePiece,
		name: 'One Piece',
		episode: 'Episode 1018'
	};
	return (
		<div>
			<SectionTitle>{title.name}</SectionTitle>
			<StreamContainer>{/* <p>show</p> */}</StreamContainer>
			<div>
				<DetailContainer>
					<PopularCard>
						<PopularCardImage src={title.src} alt={title.name} />
					</PopularCard>
					<MovieDetails>
						<div>
							<SynopsisHeader>Type:</SynopsisHeader>
							<SynopsisContent>Tv</SynopsisContent>
						</div>
						<div>
							<SynopsisHeader>Status:</SynopsisHeader>
							<SynopsisContent>ongoing</SynopsisContent>
						</div>
						<div>
							<SynopsisHeader>Studios:</SynopsisHeader>
							<SynopsisContent>Animation</SynopsisContent>
						</div>
						<div>
							<SynopsisHeader>Duration:</SynopsisHeader>
							<SynopsisContent>24 Min</SynopsisContent>
						</div>
						<div>
							<SynopsisHeader>Genres:</SynopsisHeader>
							{/* {data.data.genres.map((genre) => (
								<SynopsisContent key={genre.id}>{genre.name}</SynopsisContent>
							))} */}
						</div>
					</MovieDetails>
				</DetailContainer>
				<SynopsisContainer>
					<SynopsisHeader>Synopsis:</SynopsisHeader>
					<SynopsisContent>lorem ipsum drana. </SynopsisContent>
				</SynopsisContainer>
			</div>
		</div>
	);
}

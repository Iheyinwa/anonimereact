import { SectionTitle } from '../Explore/Explore.styles';
import {
	StreamContainer,
	DetailContainer,
	MovieDetails,
	SynopsisContainer,
	SynopsisContent,
	SynopsisHeader
} from './StreamingAnime.styles';
import { PopularCard, PopularCardImage } from '../Popular Anime/PopularAnime.styles';
import { useLocation } from 'react-router-dom';

export default function StreamingAnime() {
	const location = useLocation();
	const { name, poster, overview, releasedDate, type } = location.state;

	return (
		<div>
			<SectionTitle>{name}</SectionTitle>
			<StreamContainer>{/* <p>show</p> */}</StreamContainer>
			<div>
				<DetailContainer>
					<PopularCard>
						<PopularCardImage src={poster} alt={name} />
					</PopularCard>
					<MovieDetails>
						<div>
							<SynopsisHeader>Type:</SynopsisHeader>
							<SynopsisContent>{type}</SynopsisContent>
						</div>
						<div>
							<SynopsisHeader>Status:</SynopsisHeader>
							<SynopsisContent>Released</SynopsisContent>
						</div>
						<div>
							<SynopsisHeader>Released Date:</SynopsisHeader>
							<SynopsisContent>{releasedDate}</SynopsisContent>
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
					<SynopsisContent>{overview}</SynopsisContent>
				</SynopsisContainer>
			</div>
		</div>
	);
}

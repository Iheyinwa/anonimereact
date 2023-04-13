import PopularAnime from '../components/Popular Anime/PopularAnime';
import StreamingAnime from '../components/StreamingAnime/StreamingAnime';
import '../App.css';
export default function DetailsPage() {
	return (
		<section className="wrapper">
			<div className="container">
				<StreamingAnime />
			</div>
			<PopularAnime />
		</section>
	);
}

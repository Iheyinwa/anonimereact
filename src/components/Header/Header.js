import { useState } from 'react';
import {
	StyledInput,
	StyledH3,
	StyledUl,
	StyledHeader,
	StyledLi,
	StyledNav,
	Menu,
	MobileUl,
	Close
} from './Header.styles';

export default function Header() {
	const [ state, setState ] = useState(false);
	const openMenu = () => {
		setState(!state);
	};
	return (
		<div>
			<StyledHeader>
				<StyledNav>
					<StyledH3>Anonime</StyledH3>
					<StyledUl>
						<StyledLi to="/">Home</StyledLi>

						<StyledLi to="/anime/:animeID">List anime</StyledLi>
					</StyledUl>
				</StyledNav>
				{state ? <Close onClick={openMenu} /> : <Menu onClick={openMenu} />}
				<StyledInput placeholder="Search anime or movie" />
			</StyledHeader>
			{state && (
				<MobileUl>
					<StyledLi href="/">Home</StyledLi>
					<StyledLi href="/anime/anime-details">List anime</StyledLi>
				</MobileUl>
			)}
		</div>
	);
}

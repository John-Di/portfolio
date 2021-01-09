import React, { useState } from "react";
import { contentMaker } from '../../utils/dom-builder';

import {
	WRAPPER,
	GALLERY,
	MAIN_IMAGE,
	NAVIGATION,
	SCROLLABLE,
	THUMBNAIL,
	IMG
} from './styles';

export default function ImageGallery({ children, maxWidth = '100%', images = [], scroll = true }) {
	const [index, setIndex] = useState(0);

	let thumbnails = contentMaker(
		images.length,
		(length, _, i) => (
			<THUMBNAIL
				className={`image-gallery__thumbnail ${index === i ? `current` : ``}`}
				scroll={scroll}
				transparency={1 / 2}
				onClick={() => setIndex(i)}
				maxWidth={1 / Math.min(images.length, 5) * 100}
			>
				<IMG src={images[i]} />
			</THUMBNAIL>
		)
	);

	let nav_inner = scroll && images.length > 5 ? <SCROLLABLE className="image-gallery__scrollable">{thumbnails}</SCROLLABLE> : thumbnails;


	return (
		<WRAPPER className="image-gallery-wrapper">
			<GALLERY maxWidth={maxWidth} className="image-gallery">
				<MAIN_IMAGE className="image-gallery__main-image">
					<IMG src={images[index]} />
				</MAIN_IMAGE>
				<NAVIGATION className="image-gallery__navigation" maxWidth={maxWidth}>
					{nav_inner}
				</NAVIGATION>
			</GALLERY>
		</WRAPPER>
	);
}

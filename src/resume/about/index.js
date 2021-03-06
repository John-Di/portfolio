import React from "react";
import Summary from "../summary";
import Career from "../career";
import Projects from "../projects";
import Education from "../education";
import { SECTION } from './styles';

export default function About({ data, resume }) {
	const {
		basics,
		projects,
		work,
		education
	} = resume;

	return (
		<SECTION>
			<Summary data={basics} />
			<Career data={work} />
			<Projects data={projects} />
			<Education data={education} />
		</SECTION>
	)
}

import React from "react";
import YAMLData from "../../static/resume.yaml";
import SEO from "../components/seo";
import Basics from "./basics";
import About from "./about";
import ResumeLayout from "../layouts/resume-layout";


export default function Resume({ data = YAMLData, pageContext, location }) {
  let resume = YAMLData;

  if ('basics' in pageContext) {
    resume = pageContext;
  }

  const { basics } = resume;

  return (
    <ResumeLayout>
      <SEO title={`Resume`} description={basics.name} />
      <Basics data={data} resume={resume} showHomeButton={location.state.wasRedirected} />
      <About data={data} resume={resume} />
    </ResumeLayout>
  )
}

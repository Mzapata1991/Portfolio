import React from "react";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";

const WhoWeAreThree = () => (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSection title="SCODA AGENCY" tagline="TELL A BIGGER STORY">
          We are a fully in-house digital agency focusing on branding,
          marketing, web design and development with clients ranging from
          start-ups, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed varius quam ut magna ultricies pellentesque.
        </HeadingSection>
      </div>
      <div className="row mt-50">
        {dataFeatures.map((feature, i) => (
          <FeatureBoxTwo
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            index={i}
          >
            {feature.text}
          </FeatureBoxTwo>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreThree;

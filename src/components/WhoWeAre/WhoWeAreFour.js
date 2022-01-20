import React, { forwardRef } from "react";
import HeadingTwo from "../HeadingSection/HeadingTwo";
import OurSkillsOne from "../OurSkills/OurSkillsOne";
import CounterFour from "../Counters/CounterFour";

const WhoWeAreFour = forwardRef((props, ref) => (
  <section className="main-section" id="about" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingTwo
          title="Sobre mi"
          text="Soy Matías, Analista en Marketing Digital radicado actualmente en Canelones, Uruguay. Actualmente trabajo en modalidad remoto dando diferentes servicios. Entre ellos, Community Management, Diseño y Planificación de contenidos y Analista de datos.
Trabajo responsable y ágil dando valor a cada cliente."
        ></HeadingTwo>
      </div>
      {/* <div className="row mt-50">
        <div className="col-md-6 resume-bar">
          <OurSkillsOne />
        </div>
        <div className="col-md-6">
          <div className="row">
            <CounterFour />
          </div>
        </div>
      </div> */}
    </div>
  </section>
));

export default WhoWeAreFour;

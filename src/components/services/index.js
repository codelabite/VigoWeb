import React from "react";
import Icon1 from "../../Images/svg1.svg";
import Icon2 from "../../Images/svg1.svg";
import Icon3 from "../../Images/svg1.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon,
} from "./serviceElement";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />

          <ServicesH2> Reduce Expenses</ServicesH2>
          <ServicesP>
            {" "}
            We help reduce your fees and increase your overall revenue Expenses
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />

          <ServicesH2> Virtual Offices</ServicesH2>
          <ServicesP>
            {" "}
            You can acess us anywhere and anytime! You can acess us anywhere and
            anytime!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />

          <ServicesH2> Exclusive services</ServicesH2>
          <ServicesP>
            {" "}
            We help reduce your fees and increase your overall revenue Expenses
            Unlock our special
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;

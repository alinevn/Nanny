import FormSend from "./FormSend";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import card2 from "../static/card2.png";
import card3 from "../static/card3.png";
import card4 from "../static/card4.png";
import card5 from "../static/card5.png";

export default function Body() {
  return (
    <div className="App-body">
      <Section1 card={card2} />
      <hr />
      <FormSend />
      <hr />
      <Section2 card={card3} />
      <hr />
      <Section3 card={card4} />
      <hr />
      <Section4 card={card5} />
    </div>
  );
}

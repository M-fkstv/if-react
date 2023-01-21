import "./App.css";

import { Section } from "../Section";
import { hotels } from "../HotelCard/config";

function App() {
  return <Section sectionName={"Homes guests loves"} data={hotels} />;
}

export default App;

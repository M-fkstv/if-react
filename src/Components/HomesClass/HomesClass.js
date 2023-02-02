import React, { Component } from "react";

import { SliderButton } from "../SliderButton";
import { Slider } from "../Slider";
import { BaseURL } from "../../Constanst/links";
import "./Homes.css";

export class HomesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(BaseURL);
    const cards = await response.json();

    this.setState({ cards });
  }

  render() {
    const { cards } = this.state;
    return (
      <section className="homes">
        <h2 className="h2-text">Homes guests</h2>

        <div className="add">
          <SliderButton className={"s-button-next"} />
          <SliderButton className={"s-button-prev"} />
          <Slider className="homes__examples" data={cards} />
        </div>
      </section>
    );
  }
}

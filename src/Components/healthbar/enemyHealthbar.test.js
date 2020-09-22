import React from 'react';
import './healthbar.css';
import { OpponentHealthBar } from './enemyHealthbar'
import OpponentContext from '../../config/opponentContext';
import { render } from "@testing-library/react";


const OpponentObj  = { name: "Ilja", hp: 100, MAX_HP: 100 };
const opponentHealthbarRender = (
  <OpponentContext.Provider value={{OpponentObj}}>
    <OpponentHealthBar />,
  </OpponentContext.Provider> 
)

describe("Opponent Healthbar", function() {
    it("Opponent Healthbar renders with 100% width", function() {
      const { getByTestId } = render(opponentHealthbarRender)
      const element = getByTestId("opponent-health-bar")
      expect(element.style.width).toEqual('100%');
    })
})

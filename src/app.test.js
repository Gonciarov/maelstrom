import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';
import Fight from './Components/fight/fight.js'
import FightCanvas from './Components/canvas/FightCanvas.js'
import ReactDOM from "react-dom";
import OpponentContext from './config/opponentContext.js'
import PlayerContext from './config/playerContext.js'

global.window = { location: { pathname: null } };

describe('App', () => {
    it('it exists', () => {
      const app = render(<App />)
      expect(app).toBeTruthy();
          });
      });

const OpponentObj  = { name: "Harry", hp: 100, MAX_HP: 100 };
const PlayerObj = { name: "Ilja", hp: 100 };
const fightRender = (
  <PlayerContext.Provider value={{PlayerObj}}>
      <OpponentContext.Provider value={{OpponentObj}}>
        <FightCanvas />
        <Fight />
      </OpponentContext.Provider>
  </PlayerContext.Provider>
  )

afterEach(cleanup);

describe('App', () => {
    it('renders attack button and health bar with 100% hp', () => {
    const { getByTestId } = render(fightRender);
    const element = getByTestId("health-bar-fluid")
    expect(element.style.width).toEqual('100%');
    expect(getByTestId('attack_button')).toBeTruthy();
    
    });
});

describe('App', () => {
it('shows menu link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Menu/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('App', () => {
    it('play game link presented', () => {       
        const renderer = new ShallowRenderer();
        renderer.render(<App/>);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children.type).toBe('header')
        });
    });

describe('App', () => {
    it('menu link sends to menu', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/Menu/i);
        fireEvent.click(linkElement, { button: 0});
        expect(linkElement).toHaveTextContent('Play Game')
        expect(linkElement).toHaveAttribute('href')
    });
});
describe('App', () => {
    it('play link sends to play', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/Play Game/i);
        expect(global.window.location.pathname).toEqual('/menu');
        fireEvent.click(linkElement, { button: 0});
        expect(linkElement).toHaveTextContent('Fight')
        expect(global.window.location.pathname).toEqual('/play');
    });
});
describe('App', () => {
    it('fight link sends to fight', () => {
        const { getByTestId } = render(<App />);
        expect(global.window.location.pathname).toEqual('/play');
        const linkElement = getByTestId('fight');
        fireEvent.click(linkElement, { button: 0});
        expect(global.window.location.pathname).toEqual('/fight');
    });
});




    

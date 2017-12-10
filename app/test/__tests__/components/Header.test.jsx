import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Header from 'Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  describe('render', () => {
    it('should render the header', () => {
      const header = shallow(<Header />);
      const brand = <div className="brand">
        <h1>React Project Example</h1>
        <h3>By: <a href="http://www.jodiehag.com" rel="noopener noreferrer" target="_blank">JodieHag</a></h3>
      </div>;

       expect(header.contains(brand)).toEqual(true);
    });
  });
});

import App from './App';
import Bottom from './Bottom';
import Top from './Top';
import { shallow } from 'enzyme';

it('should render successfully', () => {
  // Act
  const wrapper = shallow(<App/>);

  // Assert
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Top).length).toEqual(1);
  expect(wrapper.find(Bottom).length).toEqual(1);
});
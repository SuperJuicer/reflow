import App from './App';
import { shallow } from 'enzyme';

it('should render successfully', () => {
  // Act
  const wrapper = shallow(<App/>);

  // Assert
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find('p').length).toEqual(1);
  expect(wrapper.find('code').length).toEqual(1);
});
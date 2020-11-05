import { shallow } from 'enzyme';
import Top from './Top';

it('should render successfully', () => {
    // Act
    const wrapper = shallow(<Top/>);
  
    // Assert
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('main').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('ol').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(3);
  });
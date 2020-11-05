import Bottom from './Bottom';
import { shallow } from 'enzyme';

it('should render successfully', () => {
    // Act
    const wrapper = shallow(<Bottom/>);

    // Assert
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('.bottom').length).toEqual(1);
    expect(wrapper.find('.grid').length).toEqual(1);
});
import Bottom from './Bottom';
import { shallow } from 'enzyme';

it('should render successfully', () => {
    // Act
    const wrapper = shallow(<Bottom/>);

    // Assert
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(1);
});
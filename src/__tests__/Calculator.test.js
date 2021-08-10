import renderer from 'react-test-renderer';
import CalculatorPage from '../component/Calculator';

describe('Calculator component testing', () => {
  it('Renders calculator component', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

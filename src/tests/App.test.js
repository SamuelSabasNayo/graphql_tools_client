import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('should render the App', () => {
    render(<App />);

    expect(<App />).not.toBeNull();
  });
});

import { render } from '@testing-library/react';
import formInstructions from 'data/form_instructions.json';
import Input from './Input';

const element = formInstructions.sections[0].content[0] as Frontier.Element;

describe('Input component', () => {
  it('renders error message', () => {
    const { queryByTestId } = render(<Input error="error" element={element} />);
    expect(queryByTestId('field-error')).toBeTruthy();
  });

  it("doesn't render error", () => {
    const { queryByTestId } = render(<Input element={element} />);
    expect(queryByTestId('field-error')).toBeFalsy();
  });
});

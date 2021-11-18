import formInstructions from 'data/form_instructions.json';
const jsonFile = formInstructions as Frontier.Job;

describe('Form instructions JSON file', () => {
  test('contains sections data', () => {
    expect(jsonFile).toHaveProperty('sections');
  });

  test('contains theme data', () => {
    expect(jsonFile).toHaveProperty('theme');
  });

  test('contains at least 1 section', () => {
    expect(formInstructions.sections.length).toBeGreaterThan(0);
  });

  test('contains at least 1 element', () => {
    expect(formInstructions.sections[0].content.length).toBeGreaterThan(0);
  });
});

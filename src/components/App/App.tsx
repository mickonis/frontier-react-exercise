import PhoneMockup from 'components/PhoneMockup/PhoneMockup';
import { FormContext } from 'context/FormState';
import formInstructionsJson from 'data/form_instructions.json';
import { useContext, useEffect } from 'react';
import './App.scss';

function App() {
  const { setFormInstructions, formInstructions, setTotalSteps } =
    useContext(FormContext);

  useEffect(() => {
    setFormInstructions(formInstructionsJson as Frontier.Job);
    setTotalSteps(formInstructionsJson.sections.length);
    setAppTheme(formInstructionsJson.theme);
  }, []);

  return <div className="app">{formInstructions && <PhoneMockup />}</div>;
}

const setAppTheme = (theme: Frontier.Theme) => {
  const documentStyle = document.documentElement.style;
  const { primary_color, secondary_color, background_color, text_color } =
    theme;
  primary_color && documentStyle.setProperty('--primary-color', primary_color);
  secondary_color &&
    documentStyle.setProperty('--secondary-color', secondary_color);
  background_color &&
    documentStyle.setProperty('--background-color', background_color);
  text_color && documentStyle.setProperty('--text-color', text_color);
};

export default App;

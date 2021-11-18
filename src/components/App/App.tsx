import PhoneMockup from 'components/PhoneMockup/PhoneMockup';
import { FormContext } from 'context/FormState';
import formInstructionsJson from 'data/form_instructions.json';
import { setAppTheme } from 'helpers/theme';
import { useContext, useEffect } from 'react';
import './App.scss';

const App = () => {
  const { setFormInstructions, formInstructions, setTotalSteps } =
    useContext(FormContext);

  const prepareApp = () => {
    setFormInstructions(formInstructionsJson as Frontier.Job);
    setTotalSteps(formInstructionsJson.sections.length);
    setAppTheme(formInstructionsJson.theme);
  };

  useEffect(() => prepareApp(), []);

  return <div className="app">{formInstructions && <PhoneMockup />}</div>;
};

export default App;

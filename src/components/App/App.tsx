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
  }, []);

  return <div className="app">{formInstructions && <PhoneMockup />}</div>;
}

export default App;

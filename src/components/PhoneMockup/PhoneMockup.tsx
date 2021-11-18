import Form from 'components/Form/Form';
import StatusHeader from 'components/StatusHeader/StatusHeader';
import { FormProvider } from 'context/FormState';
import formInstructions from 'data/form_instructions.json';
import './PhoneMockup.scss';

const PhoneMockup = () => (
  <div className="phone-mockup">
    <div className="phone-mockup__notch" />
    <div className="phone-mockup__inner-layer">
      <div className="phone-mockup__content">
        <FormProvider>
          <StatusHeader />
          <Form job={formInstructions as Frontier.Job} />
        </FormProvider>
      </div>
    </div>
  </div>
);

export default PhoneMockup;

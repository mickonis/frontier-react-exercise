import Form from 'components/Form/Form';
import formInstructions from 'data/form_instructions.json';
import './PhoneMockup.scss';

const PhoneMockup = () => (
  <div className="phone-mockup">
    <div className="phone-mockup__notch" />
    <div className="phone-mockup__inner-layer">
      <div className="phone-mockup__content">
        <Form job={formInstructions as Frontier.Job} />
      </div>
    </div>
  </div>
);

export default PhoneMockup;

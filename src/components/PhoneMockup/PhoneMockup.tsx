import Form from 'components/Form/Form';
import StatusHeader from 'components/StatusHeader/StatusHeader';
import './PhoneMockup.scss';

const PhoneMockup = () => (
  <div className="phone-mockup" data-testid="phone-mockup">
    <div className="phone-mockup__notch" />
    <div className="phone-mockup__inner-layer">
      <div className="phone-mockup__content">
        <StatusHeader />
        <Form />
      </div>
    </div>
  </div>
);

export default PhoneMockup;

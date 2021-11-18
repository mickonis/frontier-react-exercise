import { FormContext } from 'context/FormState';
import { useContext } from 'react';
import './StatusHeader.scss';

const StatusHeader = () => {
  const { currentStep, totalSteps } = useContext(FormContext);

  return (
    <div className="status-header">
      <div className="status-header__step-counter">
        Step {currentStep} of {totalSteps}
      </div>
      <div className="status-header__progress-bar">
        <div
          className="status-header__progress-filler"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default StatusHeader;

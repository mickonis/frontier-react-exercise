import './StatusHeader.scss';

const StatusHeader = () => {
  return (
    <div className="status-header">
      <div className="status-header__step-counter">Step 1 of 3</div>
      <div className="status-header__progress-bar">
        <div
          className="status-header__progress-filler"
          style={{ width: '33%' }}
        />
      </div>
    </div>
  );
};

export default StatusHeader;

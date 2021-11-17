import Input from 'components/Input/Input';
import './Form.scss';

interface FormProps {
  job: Frontier.Job;
}

const Form = ({ job }: FormProps) => {
  console.log(job);

  return (
    <div className="form">
      <div className="form__body">
        <form action="">
          <Input />
        </form>
      </div>
    </div>
  );
};

export default Form;

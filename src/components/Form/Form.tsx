import Input from 'components/Input/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';

interface FormProps {
  job: Frontier.Job;
}

const Form = ({ job }: FormProps) => {
  const { sections } = job;
  const [step, setStep] = useState(0);
  console.log(sections);

  const {
    control,
    //handleSubmit,
    //reset,
    watch,
    //formState: { errors, dirtyFields }
  } = useForm({
    reValidateMode: 'onChange',
    //resolver: yupResolver(validationSchema)
  });

  console.log('form:', watch());

  const activeSection = sections[step];

  return (
    <div className="form">
      <div className="form__body">
        {step}
        <form action="">
          <>
            <div className="form-section">{activeSection.title}</div>
            {activeSection.content.map(content => (
              <div className="form-section__content">
                <Input content={content} control={control} />
              </div>
            ))}
          </>

          <button
            onClick={e => {
              e.preventDefault();
              setStep(step + 1);
            }}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

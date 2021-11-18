import { yupResolver } from '@hookform/resolvers/yup';
import Input from 'components/Input/Input';
import Switch from 'components/Switch/Switch';
import Textarea from 'components/Textarea/Textarea';
import { generateValidationSchema } from 'helpers/form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';

interface FormProps {
  job: Frontier.Job;
}

const Form = ({ job }: FormProps) => {
  const { sections } = job;
  const [step, setStep] = useState(0);

  const {
    control,
    //handleSubmit,
    //reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(generateValidationSchema(sections)),
  });

  console.log('form:', watch());
  console.log('errors', errors);

  const renderSection = (section: Frontier.Section) => {
    return (
      <>
        <div id={section.id} className="form-section">
          {section.content.map(content => renderContent(content))}
        </div>
      </>
    );
  };

  const renderContent = (content: Frontier.Element) => {
    const error = errors[content.id]?.message;
    console.log('error', error);
    return (
      <div className="form-section__content" key={content.id}>
        {content.type === 'text' && (
          <Input content={content} control={control} error={error} />
        )}
        {content.type === 'boolean' && (
          <Switch content={content} control={control} error={error} />
        )}
        {content.type === 'textarea' && (
          <Textarea content={content} control={control} error={error} />
        )}
      </div>
    );
  };

  const activeSection = sections[step];

  return (
    <div className="form">
      {/* {step} */}
      <div className="form__body">
        <h3 className="form__title">{activeSection.title}</h3>
        <form action="">
          {renderSection(activeSection)}
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

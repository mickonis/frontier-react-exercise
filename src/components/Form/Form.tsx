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

  const renderSection = (section: Frontier.Section) => {
    return (
      <>
        <div id={section.id} className="form-section">
          {section.title}
        </div>
        {section.content.map(content => renderContent(content))}
      </>
    );
  };

  const renderContent = (content: Frontier.Element) => {
    return (
      <div className="form-section__content" key={content.id}>
        {content.type === 'text' && (
          <Input content={content} control={control} />
        )}
      </div>
    );
  };

  const activeSection = sections[step];

  return (
    <div className="form">
      <div className="form__body">
        {step}
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

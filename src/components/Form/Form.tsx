import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Switch from 'components/Switch/Switch';
import Textarea from 'components/Textarea/Textarea';
import { FormContext } from 'context/FormState';
import { generateValidationSchema } from 'helpers/form';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';

interface FormProps {
  job?: Frontier.Job;
}

const Form = ({ job }: FormProps) => {
  const { currentStep, setCurrentStep, formInstructions } =
    useContext(FormContext);
  const sections = formInstructions?.sections as Frontier.Section[];

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
      <div className="form__element" key={content.id}>
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

  const activeSection = sections[currentStep];

  return (
    <form className="form">
      <div className="form__body">
        <h3 className="form__title">{activeSection.title}</h3>
        {renderSection(activeSection)}
      </div>
      <Button
        onClick={event => {
          event.preventDefault();
          setCurrentStep(currentStep + 1);
        }}
      >
        Next
      </Button>
    </form>
  );
};

export default Form;

import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
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
  const { currentStep, totalSteps, setCurrentStep, formInstructions } =
    useContext(FormContext);
  const sections = formInstructions?.sections as Frontier.Section[];

  const activeSection = sections[currentStep];

  const {
    control,
    handleSubmit,
    //reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(generateValidationSchema(activeSection)),
  });

  console.log('form:', watch());
  console.log('errors', errors);

  const onSubmit = (formData: any) => {
    //event.preventDefault();
    console.log('currentStep', currentStep);
    console.log('totalSteps', totalSteps);

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('formData', formData);
    }
  };

  const renderSection = (section: Frontier.Section) => {
    return (
      <>
        <div id={section.id} className="form-section">
          {section.content.map(element => renderFormElement(element))}
        </div>
      </>
    );
  };

  const renderFormElement = (element: Frontier.Element) => {
    const error = errors[element.id]?.message;
    return (
      <div className="form__element" key={element.id}>
        {element.type === 'text' && (
          <Input content={element} control={control} error={error} />
        )}
        {element.type === 'boolean' && (
          <Switch content={element} control={control} error={error} />
        )}
        {element.type === 'textarea' && (
          <Textarea content={element} control={control} error={error} />
        )}
        {element.type === 'multichoice' && (
          <Select content={element} control={control} error={error} />
        )}
      </div>
    );
  };

  return (
    <form className="form">
      <div className="form__body">
        <h3 className="form__title">{activeSection.title}</h3>
        {renderSection(activeSection)}
      </div>
      <Button onClick={handleSubmit(onSubmit)}>Next</Button>
    </form>
  );
};

export default Form;

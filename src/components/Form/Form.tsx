import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import Switch from 'components/Switch/Switch';
import Textarea from 'components/Textarea/Textarea';
import { FormContext } from 'context/FormState';
import { generateValidationSchema, getErrorMessageById } from 'helpers/form';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FieldProps } from 'types/form';
import './Form.scss';

const Form = () => {
  const { currentStep, totalSteps, setCurrentStep, formInstructions } =
    useContext(FormContext);

  const sections = formInstructions?.sections as Frontier.Section[];
  const activeSection = sections[currentStep - 1];
  const isLastStep = currentStep >= totalSteps;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(generateValidationSchema(activeSection)),
  });

  const onSubmit = (formData: {
    [key: string]: string | number | boolean | [];
  }) =>
    !isLastStep
      ? setCurrentStep(currentStep + 1)
      : console.log('formData', formData);

  const renderFormSection = (section: Frontier.Section) => (
    <section id={section.id} className="form-section">
      <h3 className="form__title">{section.title}</h3>
      {section.content.map(element => renderFormElement(element))}
    </section>
  );

  const renderFormElement = (element: Frontier.Element) => {
    const { type, id } = element;
    const fieldProps: FieldProps = {
      element,
      control,
      error: getErrorMessageById(errors, id),
    };
    return (
      <div className="form__element" key={id}>
        {type === 'text' && <Input {...fieldProps} />}
        {type === 'boolean' && <Switch {...fieldProps} />}
        {type === 'textarea' && <Textarea {...fieldProps} />}
        {type === 'multichoice' && <Select {...fieldProps} />}
      </div>
    );
  };

  const buttonDisabled = Object.keys(errors).length !== 0;

  return (
    <form className="form">
      <main className="form__body">{renderFormSection(activeSection)}</main>
      <nav className="form__buttons">
        {currentStep !== 1 && (
          <Button
            secondary
            disabled={buttonDisabled}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </Button>
        )}
        <Button disabled={buttonDisabled} onClick={handleSubmit(onSubmit)}>
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </nav>
    </form>
  );
};

export default Form;

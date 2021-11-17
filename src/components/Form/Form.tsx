import { yupResolver } from '@hookform/resolvers/yup';
import Input from 'components/Input/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { buildYup } from 'schema-to-yup';
import './Form.scss';

interface FormProps {
  job: Frontier.Job;
}

const Form = ({ job }: FormProps) => {
  const { sections } = job;
  const [step, setStep] = useState(0);
  console.log(sections);

  const getAllFieldsFromSections = (sections: Frontier.Section[]) =>
    sections.map(section => section.content).flat();

  const generateValidationSchema = (sections: Frontier.Section[]) => {
    const fields = getAllFieldsFromSections(sections);

    console.log('fields', fields);

    const validationSchema1 = sections;

    const properties = fields.reduce((acc, cur) => {
      const {
        metadata: { required },
      } = cur;
      console.log('cur', cur);
      return { ...acc, [cur.id]: { required, type: 'string' } };
    }, {});

    console.log('properties', properties);

    const message = {
      title: 'users',
      type: 'object',
      properties,
      // properties: {
      //   fullname: { type: 'string', required: true },
      // },
    };

    const yupSchema = buildYup(message, {});

    return yupSchema;
  };

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
          <Input content={content} control={control} errors={errors} />
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

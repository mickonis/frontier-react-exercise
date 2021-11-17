import Input from 'components/Input/Input';
import { useForm } from 'react-hook-form';
import './Form.scss';

interface FormProps {
  job: Frontier.Job;
}

const Form = ({ job }: FormProps) => {
  const { sections } = job;
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

  return (
    <div className="form">
      <div className="form__body">
        <form action="">
          {sections.map(section => (
            <>
              <div className="form-section">{section.title}</div>
              {section.content.map(content => (
                <div className="form-section__content">
                  <Input content={content} control={control} />
                </div>
              ))}
            </>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Form;

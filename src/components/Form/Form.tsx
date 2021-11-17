import Input from 'components/Input/Input';
import './Form.scss';

interface FormProps {
  job: Frontier.Job;
}

const Form = ({ job }: FormProps) => {
  const { sections } = job;
  console.log(sections);

  return (
    <div className="form">
      <div className="form__body">
        <form action="">
          {sections.map(section => (
            <>
              <div className="form-section">{section.title}</div>
              {section.content.map(content => (
                <div className="form-section__content">
                  {content.question_text}
                </div>
              ))}
            </>
          ))}
          <Input />
        </form>
      </div>
    </div>
  );
};

export default Form;

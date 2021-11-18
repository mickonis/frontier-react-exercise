import { buildYup } from 'schema-to-yup';

export const schemaType = {
  text: 'string',
  textarea: 'string',
  boolean: 'boolean',
  multichoice: 'array',
};

export const generateValidationSchema = (section: Frontier.Section) =>
  buildYup(
    { type: 'object', properties: generateValidationProperties(section) },
    { errMessages: generateValidationMessages(section) },
  );

const generateValidationProperties = (section: Frontier.Section) =>
  section.content.reduce(
    (accumulator, { id, type, metadata: { required, pattern } }) => {
      return {
        ...accumulator,
        [id]: {
          type: schemaType[type],
          required,
          pattern,
        },
      };
    },
    {},
  );

const generateValidationMessages = (section: Frontier.Section) =>
  section.content.reduce((accumulator, { id, metadata }) => {
    return {
      ...accumulator,
      [id]: {
        required: `Field is required`,
        pattern: `Must be valid ${metadata.format}`,
      },
    };
  }, {});

export const getErrorMessageById = (errors: { [x: string]: any }, id: string) =>
  errors[id]?.message;

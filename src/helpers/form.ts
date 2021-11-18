import { buildYup } from 'schema-to-yup';

export const schemaTypes = {
  text: 'string',
  boolean: 'boolean',
  multichoice: 'array',
  textarea: 'string',
};

export const generateValidationSchema = (section: Frontier.Section) => {
  const properties = section.content.reduce((accumulator, field) => {
    return {
      ...accumulator,
      [field.id]: {
        required: field.metadata.required,
        type: schemaTypes[field.type],
        pattern: field.metadata.pattern,
      },
    };
  }, {});

  return buildYup({ type: 'object', properties }, {});
};

import { buildYup } from 'schema-to-yup';

export const schemaTypes = {
  text: 'string',
  boolean: 'boolean',
  multichoice: 'array',
  textarea: 'string',
};

export const getAllFieldsFromSections = (sections: Frontier.Section[]) =>
  sections.map(section => section.content).flat();

export const generateValidationSchema = (sections: Frontier.Section[]) => {
  const fields = getAllFieldsFromSections(sections);

  const properties = fields.reduce((accumulator, field) => {
    return {
      ...accumulator,
      [field.id]: {
        required: field.metadata.required,
        type: schemaTypes[field.type],
      },
    };
  }, {});

  return buildYup({ type: 'object', properties }, {});
};

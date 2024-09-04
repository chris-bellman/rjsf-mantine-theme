import { Box, Stack } from '@mantine/core';
import {
  FormContextType,
  ObjectFieldTemplatePropertyType,
  ObjectFieldTemplateProps,
  RJSFSchema,
  StrictRJSFSchema,
  canExpand,
  // getTemplate,
  getUiOptions,
  // titleId,
} from '@rjsf/utils';
// import { useFieldContext } from './FieldTemplate';

/** The `ObjectFieldTemplate` is the template to use to render all the inner properties of an object along with the
 * title and description if available. If the object is expandable, then an `AddButton` is also rendered after all
 * the properties.
 *
 * @param props - The `ObjectFieldTemplateProps` for this component
 */
export default function ObjectFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ObjectFieldTemplateProps<T, S, F>) {
  const {
    disabled,
    formData,
    idSchema,
    onAddClick,
    properties,
    readonly,
    registry,
    // required,
    schema,
    // title,
    uiSchema,
  } = props;

  // const { description } = useFieldContext();
  const options = getUiOptions<T, S, F>(uiSchema);
  // const TitleFieldTemplate = getTemplate<'TitleFieldTemplate', T, S, F>('TitleFieldTemplate', registry, options);

  // Button templates are not overridden in the uiSchema
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  const classNames = options.classNames;

  return (
    <div
      id={idSchema.$id}
      style={{
        width: '100%',
        marginBottom: '12px',
      }}
      className={`armt-template-objectfield ${classNames ?? ''}`}
    >
      <Box className='armt-template-objectfield-item'>
        <Stack spacing='xs'>{properties.map((prop: ObjectFieldTemplatePropertyType) => prop.content)}</Stack>
      </Box>
      {canExpand<T, S, F>(schema, uiSchema, formData) && (
        <AddButton
          className='object-property-expand'
          onClick={onAddClick(schema)}
          disabled={disabled || readonly}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
    </div>
  );
}

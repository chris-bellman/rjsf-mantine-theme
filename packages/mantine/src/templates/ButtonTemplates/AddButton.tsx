import { Button, ButtonProps } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { FormContextType, IconButtonProps, RJSFSchema, StrictRJSFSchema, TranslatableString } from '@rjsf/utils';

/** The `AddButton` renders a button that represent the `Add` action on a form
 */
export default function AddButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  uiSchema,
  registry,
  color,
  ...props
}: IconButtonProps<T, S, F>) {
  return (
    <Button
      title=''
      color={color as ButtonProps['color']}
      variant='light'
      {...props}
      leftIcon={<IconPlus />}
      // leftSection={<IconPlus />}
    ></Button>
  );
}

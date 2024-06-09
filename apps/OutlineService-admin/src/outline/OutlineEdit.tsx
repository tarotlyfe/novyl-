import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OutlineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Novel ID" source="novelId" />
        <div />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

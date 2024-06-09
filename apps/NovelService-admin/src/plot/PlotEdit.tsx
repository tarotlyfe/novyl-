import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Novel ID" source="novelId" />
      </SimpleForm>
    </Edit>
  );
};

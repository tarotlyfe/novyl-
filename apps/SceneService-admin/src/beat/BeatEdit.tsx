import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BeatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Scene ID" source="sceneId" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

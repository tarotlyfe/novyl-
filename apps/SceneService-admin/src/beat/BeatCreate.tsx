import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BeatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Scene ID" source="sceneId" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

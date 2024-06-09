import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CharacterTitle } from "../character/CharacterTitle";

export const NovelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author ID" source="authorId" />
        <div />
        <ReferenceArrayInput
          source="characters"
          reference="Character"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CharacterTitle} />
        </ReferenceArrayInput>
        <TextInput label="Genre" source="genre" />
        <div />
        <div />
        <TextInput label="Summary" multiline source="summary" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

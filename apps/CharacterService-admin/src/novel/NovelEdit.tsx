import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CharacterTitle } from "../character/CharacterTitle";

export const NovelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NovelTitle } from "../novel/NovelTitle";

export const CharacterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="novel.id" reference="Novel" label="Novel">
          <SelectInput optionText={NovelTitle} />
        </ReferenceInput>
        <TextInput label="Role" source="role" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NovelTitle } from "../novel/NovelTitle";

export const CharacterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="novel.id" reference="Novel" label="Novel">
          <SelectInput optionText={NovelTitle} />
        </ReferenceInput>
        <TextInput label="Role" source="role" />
      </SimpleForm>
    </Edit>
  );
};

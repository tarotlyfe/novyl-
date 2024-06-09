import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const AuthorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bio" multiline source="bio" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <div />
        <TextInput label="Password" source="password" />
        <SelectInput
          source="roles"
          label="Roles"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <TextInput label="Users ID" source="usersId" />
      </SimpleForm>
    </Edit>
  );
};

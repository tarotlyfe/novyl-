import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const AuthorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

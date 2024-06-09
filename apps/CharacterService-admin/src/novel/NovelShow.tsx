import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { NOVEL_TITLE_FIELD } from "./NovelTitle";

export const NovelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author ID" source="authorId" />
        <TextField label="Chapters" source="chapters" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Genre" source="genre" />
        <TextField label="ID" source="id" />
        <TextField label="Outlines" source="outlines" />
        <TextField label="Plots" source="plots" />
        <TextField label="Summary" source="summary" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Character"
          target="novelId"
          label="Characters"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField label="Novel" source="novel.id" reference="Novel">
              <TextField source={NOVEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Role" source="role" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChapterTitle } from "../chapter/ChapterTitle";
import { SceneTitle } from "../scene/SceneTitle";

export const OutlineItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="chapter.id" reference="Chapter" label="Chapter">
          <SelectInput optionText={ChapterTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Outline ID" source="outlineId" />
        <ReferenceInput source="scene.id" reference="Scene" label="Scene">
          <SelectInput optionText={SceneTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChapterTitle } from "../chapter/ChapterTitle";
import { OutlineItemTitle } from "../outlineItem/OutlineItemTitle";

export const SceneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="chapter.id" reference="Chapter" label="Chapter">
          <SelectInput optionText={ChapterTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <ReferenceArrayInput
          source="outlineItems"
          reference="OutlineItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OutlineItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

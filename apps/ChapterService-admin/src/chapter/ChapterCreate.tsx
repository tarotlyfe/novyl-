import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OutlineItemTitle } from "../outlineItem/OutlineItemTitle";
import { SceneTitle } from "../scene/SceneTitle";

export const ChapterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="ChapterNumber" source="chapterNumber" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Novel ID" source="novelId" />
        <ReferenceArrayInput
          source="outlineItems"
          reference="OutlineItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OutlineItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="scenes"
          reference="Scene"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SceneTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

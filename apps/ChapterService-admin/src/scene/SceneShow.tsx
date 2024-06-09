import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHAPTER_TITLE_FIELD } from "../chapter/ChapterTitle";
import { SCENE_TITLE_FIELD } from "./SceneTitle";

export const SceneShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Beats" source="beats" />
        <ReferenceField label="Chapter" source="chapter.id" reference="Chapter">
          <TextField source={CHAPTER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="OutlineItem"
          target="sceneId"
          label="OutlineItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Chapter"
              source="chapter.id"
              reference="Chapter"
            >
              <TextField source={CHAPTER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Outline ID" source="outlineId" />
            <ReferenceField label="Scene" source="scene.id" reference="Scene">
              <TextField source={SCENE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

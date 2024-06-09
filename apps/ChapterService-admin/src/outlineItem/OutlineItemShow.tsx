import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CHAPTER_TITLE_FIELD } from "../chapter/ChapterTitle";
import { SCENE_TITLE_FIELD } from "../scene/SceneTitle";

export const OutlineItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Chapter" source="chapter.id" reference="Chapter">
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
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHAPTER_TITLE_FIELD } from "../chapter/ChapterTitle";
import { SCENE_TITLE_FIELD } from "../scene/SceneTitle";

export const OutlineItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OutlineItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

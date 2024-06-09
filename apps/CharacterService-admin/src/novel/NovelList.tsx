import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NovelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Novels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

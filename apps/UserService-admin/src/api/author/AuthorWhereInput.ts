import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AuthorWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  novels?: JsonFilter;
  password?: StringNullableFilter;
  roles?: "Option1";
  username?: StringNullableFilter;
  usersId?: StringNullableFilter;
};

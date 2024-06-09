import { SortOrder } from "../../util/SortOrder";

export type CharacterOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  novelId?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type VersionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  slug?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  v?: SortOrder;
};

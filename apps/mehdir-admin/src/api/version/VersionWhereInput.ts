import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VersionWhereInput = {
  id?: StringFilter;
  slug?: StringNullableFilter;
  title?: StringNullableFilter;
  v?: StringNullableFilter;
};

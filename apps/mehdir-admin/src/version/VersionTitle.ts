import { Version as TVersion } from "../api/version/Version";

export const VERSION_TITLE_FIELD = "title";

export const VersionTitle = (record: TVersion): string => {
  return record.title || String(record.id);
};

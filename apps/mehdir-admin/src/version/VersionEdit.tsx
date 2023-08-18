import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VersionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="slug" source="slug" />
        <TextInput label="title" source="title" />
        <TextInput label="v" source="v" />
      </SimpleForm>
    </Edit>
  );
};

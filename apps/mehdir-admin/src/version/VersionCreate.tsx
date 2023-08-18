import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VersionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="slug" source="slug" />
        <TextInput label="title" source="title" />
        <TextInput label="v" source="v" />
      </SimpleForm>
    </Create>
  );
};

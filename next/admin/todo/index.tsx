import { useContext } from "react";
import {
  BooleanField,
  Datagrid,
  List,
  TextField,
  ListProps,
  EditProps,
  SimpleForm,
  Edit,
  BooleanInput,
  TextInput,
  EditButton,
  Create,
  CreateProps,
  ShowProps,
  Show,
  SimpleShowLayout,
  ShowButton,
  NumberField,
  NumberInput,
  DeleteWithConfirmButton,
  useNotify,
  useRedirect,
} from "react-admin";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { LoggedInUserContext } from "../context/LoggedInUserContext";

export const TodoList = (props: ListProps) => {
  const { user } = useContext(LoggedInUserContext);

  return (
    <List
      {...props}
      {...(user ? { title: `logged in as user # ${user}` } : {})}
    >
      <Datagrid bulkActionButtons={false}>
        <NumberField source="id" sortable={false} />
        <TextField source="title" sortable={false} />
        <TextField source="description" sortable={false} />
        <BooleanField source="isCompleted" sortable={false} />
        <ShowButton />
        <EditButton />
        <DeleteWithConfirmButton mutationOptions={{ onSuccess: () => {} }} />
      </Datagrid>
    </List>
  );
};

export const TodoEdit = (props: EditProps) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onError = (error) => {
    notify(getErrorMessage(error));
  };

  const onSuccess = () => redirect("/todo");

  return (
    <Edit
      {...props}
      mutationMode="pessimistic"
      mutationOptions={{ onError, onSuccess }}
    >
      <SimpleForm>
        <NumberInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="description" />
        <BooleanInput source="isCompleted" />
      </SimpleForm>
    </Edit>
  );
};

export const TodoCreate = (props: CreateProps) => {
  const notify = useNotify();

  const onError = (error) => {
    notify(getErrorMessage(error));
  };

  return (
    <Create {...props} mutationOptions={{ onError }}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />
        <BooleanInput source="isCompleted" />
      </SimpleForm>
    </Create>
  );
};

export const TodoShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <BooleanField source="isCompleted" />
      </SimpleShowLayout>
    </Show>
  );
};

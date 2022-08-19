import { useContext } from "react";
import axios from "axios";
import {
  BooleanField,
  Datagrid,
  EmailField,
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
  Button,
  useRecordContext,
  useNotify,
  useRedirect,
} from "react-admin";
import LoginIcon from "@mui/icons-material/Login";
import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { getErrorMessage } from "../../helpers/getErrorMessage";

const LoginButton = ({
  updateUser,
}: {
  updateUser: (userId: number) => void;
}) => {
  const record = useRecordContext();
  console.log("the record:", record);
  const loginHandler = () => {
    axios
      .post(
        "http://localhost:3001/auth/login",
        { id: record.id },
        { withCredentials: true }
      )
      .then(() => updateUser(record.id as number));
  };

  return (
    <Button label="" onClick={loginHandler}>
      <LoginIcon />
    </Button>
  );
};

export const UserList = (props: ListProps) => {
  const { user, updateUserId } = useContext(LoggedInUserContext);

  return (
    <List
      {...props}
      {...(user ? { title: `logged in as user # ${user}` } : {})}
    >
      <Datagrid isRowSelectable={() => false} bulkActionButtons={false}>
        <LoginButton updateUser={updateUserId} />
        <NumberField source="id" sortable={false} />
        <EmailField source="email" sortable={false} />
        <TextField source="username" sortable={false} />
        <BooleanField source="isAdmin" sortable={false} />
        <ShowButton />
        <EditButton />
        <DeleteWithConfirmButton mutationOptions={{ onSuccess: () => {} }} />
      </Datagrid>
    </List>
  );
};

export const UserEdit = (props: EditProps) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onError = (error) => {
    notify(getErrorMessage(error));
  };

  const onSuccess = () => redirect("/user");

  return (
    <Edit
      {...props}
      mutationMode="pessimistic"
      mutationOptions={{ onError, onSuccess }}
    >
      <SimpleForm>
        <NumberInput disabled source="id" />
        <TextInput source="email" />
        <TextInput source="username" />
        <BooleanInput source="isAdmin" />
      </SimpleForm>
    </Edit>
  );
};

export const UserCreate = (props: CreateProps) => {
  const notify = useNotify();

  const onError = (error) => {
    notify(getErrorMessage(error));
  };

  return (
    <Create {...props} mutationOptions={{ onError }}>
      <SimpleForm>
        <TextInput source="email" />
        <TextInput source="username" />
        <BooleanInput source="isAdmin" />
      </SimpleForm>
    </Create>
  );
};

export const UserShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <NumberField source="id" />
        <EmailField source="email" />
        <TextField source="username" />
        <BooleanField source="isAdmin" />
      </SimpleShowLayout>
    </Show>
  );
};

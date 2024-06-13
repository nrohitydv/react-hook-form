import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { Schema } from "../types/schema";
import RHFAutoComplete from "../../components/AutoComplete";
import { useStates } from "../services/queries";

const Users = () => {
  const statesQuery = useStates();
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();
  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutoComplete<Schema>
        name="states"
        label="States"
        options={statesQuery.data}
      />
    </Stack>
  );
};

export default Users;

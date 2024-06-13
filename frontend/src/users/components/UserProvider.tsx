import { FormProvider, useForm } from "react-hook-form";
import Users from "./Users";
import { Schema, defaultValues, schema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
const UserProvider = () => {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });
  return (
    <div>
      <FormProvider {...methods}>
        <DevTool control={methods.control} />
        <Users />
      </FormProvider>
    </div>
  );
};

export default UserProvider;

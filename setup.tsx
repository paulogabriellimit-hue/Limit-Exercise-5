import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";

type SetupFormInputs = {
  firstName: string;
  lastName: string;
};

export default function SetupPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SetupFormInputs>();
  const router = useRouter();

  const onSubmit = (data: SetupFormInputs) => {
    console.log("Setup Data:", data);
    router.push("/homepage");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Setup Account</Text>

      <Controller
        control={control}
        name="firstName"
        rules={{ required: "First name is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="First Name"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 5 }}
          />
        )}
      />
      {errors.firstName && <Text>{errors.firstName.message}</Text>}

      <Controller
        control={control}
        name="lastName"
        rules={{ required: "Last name is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Last Name"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 5 }}
          />
        )}
      />
      {errors.lastName && <Text>{errors.lastName.message}</Text>}

      <Button title="Complete Setup" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

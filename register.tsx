import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";

type RegisterFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const router = useRouter();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Registration Data:", data);
    router.push("/setup");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Register</Text>

      <Controller
        control={control}
        name="email"
        rules={{ required: "Email is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 5 }}
          />
        )}
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: { value: 6, message: "At least 6 characters" },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 5 }}
          />
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: "Confirm Password is required",
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 5 }}
          />
        )}
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

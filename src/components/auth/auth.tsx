import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group } from "@mantine/core";
import { randomId } from "@mantine/hooks";

export default function LoginForm() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            email: "",
        },
    });

    return (
        <>
            <div>
                <TextInput
                    label="Name"
                    placeholder="Name"
                    key={form.key("name")}
                    {...form.getInputProps("name")}
                />
                <TextInput
                    mt="md"
                    label="Email"
                    placeholder="Email"
                    key={form.key("email")}
                    {...form.getInputProps("email")}
                />

                <Group justify="center" mt="xl">
                    <Button
                        onClick={() =>
                            form.setValues({
                                name: randomId(),
                                email: `${randomId()}@test.com`,
                            })
                        }
                    >
                        Set random values
                    </Button>
                </Group>
            </div>
        </>
    );
}

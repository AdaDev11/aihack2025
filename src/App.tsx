import { useState } from "react";
import Demo from "./demo.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { ButtonProps } from "@mantine/core";
import type { DatePickerProps } from "@mantine/dates";
import Dashboard from "./components/dashboard/dashboard.tsx";
import Button from "@mui/material/Button";
import LoginForm from "./components/auth/auth.tsx";

function App() {
    return (
        <>
            <MantineProvider>
                <LoginForm />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Dashboard />
            </MantineProvider>
        </>
    );
}

export default App;

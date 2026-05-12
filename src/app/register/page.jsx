"use client";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";


const RegisterPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userdata = Object.fromEntries(formData);

        // console.log(userdata);

        const { data, error } = await authClient.signUp.email({
            email: userdata.email,
            password: userdata.password,
            name: userdata.name,
        });
        if (data) {
            toast.success(
                userdata.name.length > 3
                    ? `Register success ${userdata.name.split(" ")[0]}`
                    : "Register success"
            );
            redirect('/')
        }
        // console.log("data:", data);
        // console.log("error:", error);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
            <Form
                className="w-full max-w-md mx-auto bg-white shadow-2xl rounded-3xl p-8 border border-gray-100"
                onSubmit={onSubmit}
            >
                <Fieldset>
                    <div className="text-center mb-6">
                        <Fieldset.Legend className="text-3xl font-bold text-gray-800">
                            Register Now
                        </Fieldset.Legend>
                        <p className="text-gray-500 mt-2 text-sm">
                            Create your account and start your journey
                        </p>
                    </div>

                    <FieldGroup className="space-y-5">
                        <TextField isRequired name="name">
                            <Label className="text-sm font-medium text-gray-700">
                                Name
                            </Label>

                            <Input
                                placeholder="Enter your name"
                                className="mt-2"
                            />

                            <FieldError />
                        </TextField>

                        <TextField isRequired name="email" type="email">
                            <Label className="text-sm font-medium text-gray-700">
                                Email
                            </Label>

                            <Input
                                placeholder="Enter your email"
                                className="mt-2"
                            />

                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            minLength={8}
                        >
                            <Label>Password</Label>

                            <Input placeholder="Enter your password" />

                            <Description>
                                Password must be at least 8 characters
                            </Description>

                            <FieldError />
                        </TextField>
                    </FieldGroup>

                    <Fieldset.Actions className="flex flex-col sm:flex-row gap-3 mt-4">
                        <Button
                            type="submit"
                            className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition"
                        >
                            Register
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="w-full py-3 rounded-xl"
                        >
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                    <div className="flex items-center">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="px-3 text-xs text-gray-400">OR</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Google Login */}
                    <Button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-gray-500 transition"
                        onClick={() => console.log("Google login")}
                    >
                        <GrGoogle />
                        Continue with Google
                    </Button>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-500 mt-2">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-black font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </Fieldset>
            </Form>
        </div>
    );
};

export default RegisterPage;
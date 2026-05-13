

import LoginForm from "@/components/LoginForm";
import { Suspense } from "react";

const LoginPage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
            <Suspense> <LoginForm ></LoginForm></Suspense>
        </div>
    );
};

export default LoginPage;
import Link from "next/link";

import AuthInput from "./auth-input";
import AuthPassword from "./auth-password";
import { SubmitButton } from "./submit-button";

export default function SignUpForm() {
    return (

        <div className="flex min-h-screen items-center justify-center">

            <div className="space-y-6 w-[500px] center rounded-xl border border-neutral-300 bg-white p-6 shadow-sm x">
                <form className="space-y-6">
                    <AuthInput
                        label="Full Name"
                        name="name"
                        placeholder="John Doe"
                    />

                    <AuthInput
                        label="Username"
                        name="username"
                        placeholder="john"
                    />

                    <AuthInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                    />

                    <AuthPassword
                        label="Password"
                        name="password"
                    />

                    <AuthPassword
                        label="Confirm Password"
                        name="confirmPassword"
                    />

                    <SubmitButton
                        text="Create Account"
                        loadingText="Creating Account..."
                    />

                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            className="font-semibold text-[#8B5E3C]"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>

            </div>
        </div>


    );
}
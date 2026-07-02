import Link from "next/link";

import AuthInput from "./auth-input";
import AuthPassword from "./auth-password";
import { SubmitButton } from "./submit-button";

export default function SignInForm() {
    return (

        <div className="flex min-h-screen items-center justify-center" >
            <div className="space-y-6 w-[500px] center rounded-xl border border-neutral-300 bg-white p-6 shadow-sm x">
                <form className="space-y-6">
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

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />

                            Remember me
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-[#8B5E3C]"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <SubmitButton
                        text="Sign In"
                        loadingText="Signing In..."
                    />

                    <p className="text-center text-sm">
                        Don not have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="font-semibold text-[#8B5E3C]"
                        >
                            Create Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>

    );
}
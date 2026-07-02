"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  text: string;
  loadingText: string;
}

export function SubmitButton({
  text,
  loadingText,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex h-12 w-full items-center justify-center rounded-xl bg-[#8B5E3C] font-semibold text-white transition-all duration-200 hover:bg-[#70492d] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>

          {loadingText}
        </div>
      ) : (
        text
      )}
    </button>
  );
}
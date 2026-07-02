import { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AuthInput({
  label,
  ...props
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-neutral-700">
        {label}
      </label>

      <input
        {...props}
        className="h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 outline-none transition focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20"
      />
    </div>
  );
}
"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordProps {
  name: string;
  label: string;
}

export default function AuthPassword({
  name,
  label,
}: PasswordProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-neutral-700">
        {label}
      </label>

      <div className="relative">
        <input
          name={name}
          type={show ? "text" : "password"}
          className="h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 pr-12 outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {show ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>
    </div>
  );
}
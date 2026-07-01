import { Role } from "@prisma/client";

export const permissions = {
  USER: ["purchase"],
  ARTIST: [
    "purchase",
    "upload_artwork",
  ],
  ADMIN: [
    "purchase",
    "upload_artwork",
    "manage_users",
    "manage_orders",
  ],
};
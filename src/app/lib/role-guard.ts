import { Role } from "@prisma/client";

export function hasRole(
  userRole: Role,
  requiredRole: Role
) {
  const hierarchy = {
    USER: 1,
    ARTIST: 2,
    ADMIN: 3,
  };

  return (
    hierarchy[userRole] >=
    hierarchy[requiredRole]
  );
}
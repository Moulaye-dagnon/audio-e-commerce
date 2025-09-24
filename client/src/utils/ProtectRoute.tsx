import { Navigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { type ReactNode } from "react";
import LoaderComponent from "../components/loader/LoaderComponent";

function ProtectRoute({ children }: { children: ReactNode }) {
  const user = useAppSelector((state) => state.user.user);
  const loading = useAppSelector((state) => state.user.loading);
  if (loading) return <LoaderComponent />;

  if (!user)
    return <Navigate to={"/login"} state={{ redirectFromCick: true }} />;
  return children;
}

export default ProtectRoute;

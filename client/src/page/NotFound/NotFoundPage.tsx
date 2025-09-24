import { Link, useRouteError } from "react-router";

function NotFoundPage() {
  const error: unknown = useRouteError();
  console.error(error);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-600 lg:text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page
              {(error as Error)?.message ||
                (error as { statusText?: string })?.statusText}
            </h6>

            <p className="mb-4 text-center text-gray-500 md:text-lg">
              La page que vous recherchez n'existe pas.
            </p>

            <Link
              to="/"
              className="rounded-md bg-blue-600 px-5 py-2 text-blue-100 hover:bg-blue-700"
            >
              Retourner à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

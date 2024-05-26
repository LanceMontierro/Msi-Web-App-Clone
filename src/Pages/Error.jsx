import { Nav } from "../Components";

const Error = () => {
  return (
    <>
      <Nav />
      <div className="flexCenter text-center h-[80vh] ">
        <div>
          <p className="text-[16px] font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-[48px] font-bold tracking-tight text-gray-900">
            Page not found
          </h1>
          <p className="mt-6 text-[16px] leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;

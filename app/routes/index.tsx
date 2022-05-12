import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container mx-auto bg-charcoal">
      <h1 className="text-center text-5xl font-light text-gray-200">
        Hello world!
      </h1>
      <div className="mx-auto mt-16 max-w-7xl text-center">
        <Link
          to="/books"
          className="text-xl text-blue-600 underline"
        >
          Bookmarks
        </Link>
      </div>
   </div>
  );
}

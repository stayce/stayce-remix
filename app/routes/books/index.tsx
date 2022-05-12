import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBooks } from "~/models/book.server";

type LoaderData = {
  // Books is whatever type getBooks resolves to
  books: Awaited<ReturnType<typeof getBooks>>;
};

export const loader = async () => {
  return json<LoaderData>({
    books: await getBooks(),
  });
};

export default function Books() {
  const { books } = useLoaderData() as LoaderData;
  console.log(books);
  return (
    <main className="container mx-auto bg-charcoal">
      <h1 className="text-center text-5xl font-light text-gray-200">
        Bookmarks
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {books.map((book) => (
          <div key={book.title} className="max-w-sm w-full lg:max-w-full lg:flex">
            <div style={{ backgroundImage: `url("${book.image}")` }} className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2 font-light text-gray-200">
                  {book.title}
                </div>
                <p className="text-gray-700 text-base">
                  {book.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
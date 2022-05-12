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
      <div className="mx-auto mt-16 max-w-7xl text-center">
        {books.map((book) => (
          <div key={book.title} className="mx-auto mt-16 max-w-4xl text-center">
            <img className="mx-auto" src={book.image} alt={book.title} />
            <h2 className="text-xl font-light text-gray-200">{book.title}</h2>
            <p className="text-gray-200">{book.author}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
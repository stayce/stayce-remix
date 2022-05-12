type Book = {
  title: string;
  author: string;
  image: string;
  buy: string;
};

export async function getBooks(): Promise<Array<Book>> {
  return [
    {
      title: "Hero of Two Worlds",
      author: "Mike Duncan",
      image: "https://placekitten.com/200/300",
      buy: "https://example.com/buy",
    },
    {
      title: "The Medium Is The Message",
      author: "Marshall McLuhan",
      image: "https://placekitten.com/200/300",
      buy: "https://example.com/buy",
    },
  ];
}
type Book = {
  title: string;
  author: string;
  image: string;
  buy: string;
};

export async function getBooks(): Promise<Array<Book>> {
  return [
    {
      title: "Hero of Two Worlds: The Marquis de Lafayette in the Age of Revolution",
      author: "Mike Duncan",
      image: "https://images-us.bookshop.org/ingram/9781541730335.jpg?height=500",
      buy: "https://bookshop.org/books/hero-of-two-worlds-the-marquis-de-lafayette-in-the-age-of-revolution-9781549193071/9781541730335",
    },
    {
      title: "The Medium Is The Massage",
      author: "Marshall McLuhan",
      image: "https://images-us.bookshop.org/ingram/9781584230700.jpg?height=500&v=v2",
      buy: "https://bookshop.org/books/the-medium-is-the-massage-revised/9781584230700",
    },
    {
      title: "Cats, Dogs, and Other Animals",
      author: "Cat and Dog",
      image: "https://placekitten.com/200/300",
      buy: "https://example.com/buy",
    },
  ];
}
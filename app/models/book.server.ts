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
      title: "The Medium Is The Massage: An Inventory of Effects",
      author: "Marshall McLuhan",
      image: "https://images-us.bookshop.org/ingram/9781584230700.jpg?height=500&v=v2",
      buy: "https://bookshop.org/books/the-medium-is-the-massage-revised/9781584230700",
    },
    {
      title: "How the World Really Works: The Science Behind How We Got Here and Where We're Going",
      author: "Vaclav Smil",
      image: "https://images-us.bookshop.org/ingram/9780593297063.jpg?height=500&v=v2",
      buy: "https://bookshop.org/books/how-the-world-really-works-the-science-behind-how-we-got-here-and-where-we-re-going/9780593297063",
    },
  ];
}
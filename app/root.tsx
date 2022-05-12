import type { LinksFunction, MetaFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import Layout from "./layouts";
import styles from "./tailwind.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
  ];
};

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    description: "Machine Learning Software Engineer, Interaction and Product Designer, and Serial Entrepreneur",
    title: "Stayce",
    viewport: "width=device-width,initial-scale=1",
  };
};

function Document({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  // throw new Error("Not implemented");
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <div className="text-red-500">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document>
      <div className="text-red-500">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
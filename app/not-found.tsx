import css from "./not-found.module.css"
import type { Metadata } from "next";

export default function NotFound() {
    return (
        <>
        <h1 className={css.title}>404 - Page not found</h1>
        <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
        </>
    )
}

export const metadata: Metadata = {
  title: "Not Found Page",
  description: "This page not found",
      openGraph: {
      title: "Not Found Page",
      description: "This page not found",
      url: "https://08-zustand-ten-mu.vercel.app/",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "Note Hub Foto",
        }
      ],
    },
};
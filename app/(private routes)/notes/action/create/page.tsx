import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Note Create",
  description: "Easily create new notes",
      openGraph: {
      title: "Note Create",
      description: "Easily create new notes",
      url: "https://08-zustand-ten-mu.vercel.app/notes/action/create",
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


export default function CreateNote() {
    return (
        <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
          <NoteForm/>
  </div>
</main>
    )
}
import css from "./NoteList.module.css";
import type { Note } from "../../types/note";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "@/lib/api";
import Link from "next/link";

interface NoteListProps {
    notes: Note[];
}


export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: deleteNote,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["notes"] });
    }
  });


    return (
        <ul className={css.list}>
        {notes.map( note =>
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
              <span className={css.tag}>{note.tag}</span>
              <Link href={`/notes/${note.id}`} >View details</Link>
            <button // При натисканні на кнопку Delete в елементі списку нотатків, відповідна нотатка має видалятися на бекенді та оновлюватись збережені серверні дані.
              className={css.button}
              onClick={() => mutation.mutate(note.id)}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
        </li>
)}
</ul>
    )
}
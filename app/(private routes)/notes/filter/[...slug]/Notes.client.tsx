"use client";

import css from './NotesPage.module.css';


import { useQuery, keepPreviousData } from '@tanstack/react-query'
import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api/clientApi";
import { useState } from "react";
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';
// import Modal from "@/components/Modal/Modal";
// import NoteForm from "@/components/NoteForm/NoteForm";
import { useDebounce } from "use-debounce";
import { NoteTag } from "@/types/note";

import Link from "next/link";

type NotesClientProps = {
  tag?: NoteTag;
};

const perPage = 12;

export default function NotesClient({tag}: NotesClientProps) {

  const [search, setSearch] = useState(""); // стан для пошуку
  const [page, setPage] = useState(1); // стан для пагінації
  // const [isModalOpen, setIsModalOpen] = useState(false); // стан модального вікна
  const [debouncedSearch] = useDebounce(search, 1000); // стан затримки пошуку

  const { data } = useQuery({ // стан запиту
    queryKey: ["notes", page, debouncedSearch, tag],
    queryFn: () => fetchNotes(page, debouncedSearch, perPage, tag),
    placeholderData: keepPreviousData, // без блимання
    // refetchOnMount: false,
  })

const handleSearchChange = (value: string) => {
  setSearch(value);
  setPage(1);
}
  //   const openModal = () => {
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
    <div className={css.app}>
	<header className={css.toolbar}>

          <SearchBox value={search} onChange={handleSearchChange} />
          
          {data && data?.totalPages > 1 && <Pagination totalPages={data.totalPages} currentPage={page} onPageChange={setPage} />}
          
          <Link href="/notes/action/create" className={css.button} role="button">Create note +</Link>
          
  </header> 

        {data && data?.notes.length > 0 && <NoteList notes={data.notes} />}

        {/* {isModalOpen && (<Modal onClose={closeModal}> <NoteForm onCancel={closeModal} /></Modal>)} */}
    </div>
    </>
  )
}
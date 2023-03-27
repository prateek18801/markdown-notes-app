export type Tag = {
    id: string,
    label: string
}

export type NoteData = {
    title: string,
    markdown: string,
    tags: Tag[]
}

export type Note = {
    id: string
} & NoteData

export type RawNoteData = {
    title: string,
    markdown: string,
    tagIds: string[]
}

export type RawNote = {
    id: string
} & RawNoteData

export type SimplifiedNote = {
    id: string,
    title: string,
    tags: Tag[]
}

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void,
    onAddTag: (data: Tag) => void,
    availableTags: Tag[]
} & Partial<NoteData>

export type AddNoteProps = {
    onSubmit: (data: NoteData) => void,
    onAddTag: (data: Tag) => void,
    availableTags: Tag[]
}

export type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void,
    onAddTag: (data: Tag) => void,
    availableTags: Tag[]
}

export type NoteListProps = {
    availableTags: Tag[],
        notes: Note[],
        onUpdateTag: (id: string, label: string) => void,
        onDeleteTag: (id: string) => void
}

export type NoteLayoutProps = {
    notes: Note[]
}

export type NoteProps = {
    onDelete: (id: string) => void
}

export type EditTagsModalProps = {
    show: boolean,
    availableTags: Tag[],
    handleClose: () => void,
    onUpdateTag: (id: string, label: string) => void,
    onDeleteTag: (id: string) => void
}

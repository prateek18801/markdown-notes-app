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

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void,
    onAddTag: (data: Tag) => void,
    availableTags: Tag[]
}

export type AddNoteProps = {
    onSubmit: (data: NoteData) => void,
    onAddTag: (data: Tag) => void,
    availableTags: Tag[]
}

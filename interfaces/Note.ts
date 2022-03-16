export default interface Note {
  id?: number
  title: string
  author: string // Foreing key?
  content: string
  timestamp?: Date | number | string
}

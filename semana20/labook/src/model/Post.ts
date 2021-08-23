enum USER_ROLE{
  NORMAL = "normal",
  EVENT = "event"
}

export class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private type: USER_ROLE,
    private created_at: number,
    private author_id: string
  ) { }
  
  getId() {
    return this.id
  }

  getPhoto() {
    return this.photo
  }

  getDescription() {
    return this.description
  }

  getType() {
    return this.type
  }

  getCreationTime() {
    return this.created_at
  }

  getAuthor() {
    return this.author_id
  }

  setId(newId: string) {
    this.id = newId
  }

  setPhoto(newPhoto: string) {
    this.photo = newPhoto
  }

  setDescription(newDescription: string) {
    this.description = newDescription
  }

  setType(newType: USER_ROLE) {
    this.type = newType
  }

  setCreationTime(newTime: number) {
    this.created_at = newTime
  }

  setAuthor(newAuthor: string) {
    this.author_id = newAuthor
  }
}

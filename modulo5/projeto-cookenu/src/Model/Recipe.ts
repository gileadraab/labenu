export class Recipe {
  private id: string;
  private title: string;
  private description: string;
  private dateCreated: string;
  private userId: string;

  constructor (id: string, title: string, description: string, dateCreated: string, userId: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.dateCreated = dateCreated;
    this.userId = userId;
  }

  getId(){
    return this.id
  }

  getTitle(){
    return this.title
  }

  getDescription(){
    return this.description
  }

  getDateCreated(){
    return this.dateCreated
  }

  getUserId(){
    return this.userId
  }

  
}
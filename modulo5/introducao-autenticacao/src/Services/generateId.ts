import { v4 } from "uuid";

export class generateId {
  createId(): string{
    return v4();
  }
}

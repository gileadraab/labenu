export class HashManagerMock {
  public hash = async (plaintext: string): Promise<string> => {
    if (plaintext == "bananinha") {
      return "hash-bananinha"
    }
    return "hash-mock"
  }
  public compare = async (plaintext: string, hash: string): Promise<boolean> => {
    if (plaintext == "mock123" && hash == "hash-mock123") {
      return true
    }
    return false
  }
}
export class userService {
  private users: Map<string, { id: string; name: string; email: string }> = new Map();

  constructor() {
    // Initialize with some dummy data
    this.users.set("1", { id: "1", name: "John Doe", email: "john@example.com" });
  }

  async registerUser(userData: { name: string; email: string }): Promise<{ id: string; name: string; email: string }> {
    const id = (this.users.size + 1).toString();
    const newUser = { id, ...userData };
    this.users.set(id, newUser);
    return newUser;
  }

  async loginUser(email: string, password: string): Promise<{ id: string; name: string; email: string } | null> {
    // Dummy login logic
    const user = Array.from(this.users.values()).find(user => user.email === email);
    return user || null;
  }
}

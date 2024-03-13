export default class Singleton {
  static instance: Singleton | null = null;
  static getInstance () {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance
  }
}
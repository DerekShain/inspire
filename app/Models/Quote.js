export class Quote {
  constructor(quoteData) {
    this.author = quoteData.author;
    this.authorSlug = quoteData.authorSlug;
    this.content = quoteData.content;
    this.dateAdded = quoteData.dateAdded;
    this.dateModified = quoteData.dateModified;
    this.length = quoteData.length;
    this.tags = quoteData.tags;
    this.id = quoteData._id;
  }

  get Template() {
    return /*html*/ `
        <h5 title="Quote from ${this.author}">${this.content}</h5>
    
        `;
  }
}

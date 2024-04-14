export default class Course {
  constructor(name, link, tags, imageLink) {
    this.name = name;
    this.link = link;
    this.tags = Array.isArray(tags) ? tags : [tags];
    this.imageLink = imageLink;
  }
}

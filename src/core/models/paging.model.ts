export class PagingModel {
  page: number;
  page_size?: number;
  total_items: number;
  total_pages: number;

  constructor() {
    this.page = 0;
    this.total_items = 0;
    this.total_pages = 0;
  }
}

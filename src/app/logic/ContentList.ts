import { initContent, ContentType } from '../data/initContent';

class ContentList {
    data: ContentType[];

    constructor() {
        this.data = initContent;
    }

    getData() {
        return [...this.data];
    }

    add(item: ContentType) {
        this.data.push(item);
    }

    refresh(dataNew: ContentType[]) {
        this.data = dataNew;
    }

    remove(id: string) {
        const deleteIndex = this.findItemIndex(id);
        this.data.splice(deleteIndex, 1);
    }

    findItemIndex(id: string) {
        return this.data.findIndex((item) => item.id === id);
    }
}

const notesList = new ContentList();
export default notesList;

import { Announcement } from "../announcements/model/annaouncement";

export class FavoriteService {
    private announcements: Announcement[];

    constructor() {
        //request to server to get list of favorite Announcements;
        this.announcements = [];
    }
    getFavoriteAnnouncements() {
        return this.announcements.slice();
    }
    getFavoriteAnnouncement(index: number) {
        return this.announcements[index];
    }
    addFavoriteAnnouncement(announcement: Announcement) {
        this.announcements.push(announcement);
    }
    // after  user close tab all new items must be send to server
}
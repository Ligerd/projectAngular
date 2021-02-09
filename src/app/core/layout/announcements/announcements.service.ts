import { Injectable } from "@angular/core";
import { FavoriteService } from "../favorite-announcements/favorite.service";
import { Announcement } from "./model/annaouncement";

@Injectable()
export class AnnouncementsService {
    private announcements: Announcement[] = [new Announcement(0, "Test1", "Author Test", "Test Description", "https://qph.fs.quoracdn.net/main-qimg-3ad44e4e9b16cce7e941756d49eba556",2),
    new Announcement(1, "Test2", "Author Test2", "Test Description2", "https://i.chzbgr.com/full/12581125/h2346A3D4/homer-simpson-front-end-back-end-man-taking-photo-with-a-toilet-seat-that-looks-like-hes-on-a-plane",3),
    new Announcement(2, "Test3", "Author Test3", "Test Description3", "https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/states-of-a-programmer.png",4),
    new Announcement(3, "Test4", "Author Test4", "Test Description4", "https://www.meme-arsenal.com/memes/1719a8347b840a6896600e8886125bb3.jpg",5),
    new Announcement(4, "Test5", "Author Test5", "Test Description5", "https://pics.me.me/backend-frontend-ops-imikeurt-arson-2019-how-i-think-some-58757281.png",6),
    new Announcement(5, "Test7", "Author Test7", "Test Description7", "https://starecat.com/content/wp-content/uploads/tesla-cybertruck-when-backend-dev-goes-frontend.jpg",7),
    new Announcement(6, "Test7", "Author Test7", "Test Description7", "https://i.chzbgr.com/full/12581125/h2346A3D4/homer-simpson-front-end-back-end-man-taking-photo-with-a-toilet-seat-that-looks-like-hes-on-a-plane",8),
    ];
    constructor(private favoriteService: FavoriteService) {

    }
    getAnnouncements() {
        return this.announcements.slice();
    }
    getAnnouncement(id: number) {
        for (let announcement of this.announcements){
            if (announcement.id === id){
                return  announcement;
            }
        }
    }
    addToFavorite(announcement: Announcement){
        this.favoriteService.addFavoriteAnnouncement(announcement);
    }
}
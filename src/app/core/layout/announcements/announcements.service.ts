import { Announcement } from "./model/annaouncement";

export class AnnouncementsService {
    private announcements: Announcement[]=[new Announcement(1,"Test1","Author Test","Test Description","https://qph.fs.quoracdn.net/main-qimg-3ad44e4e9b16cce7e941756d49eba556"),
    new Announcement(2,"Test2","Author Test2","Test Description2","https://i.chzbgr.com/full/12581125/h2346A3D4/homer-simpson-front-end-back-end-man-taking-photo-with-a-toilet-seat-that-looks-like-hes-on-a-plane"),
    ];
    constructor(){

    }
    getAnnouncements(){
        return this.announcements.slice();
    }
    getAnnouncement(index: number) {
        return this.announcements[index];
      }
}
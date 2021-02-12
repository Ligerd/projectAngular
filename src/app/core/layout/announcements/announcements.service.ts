import { Injectable } from "@angular/core";
import { FavoriteService } from "../favorite-announcements/favorite.service";
import { Announcement } from "./model/annaouncement";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiUrlProvider } from "src/app/shared/api-url-provider";
import { Observable } from "rxjs";
import { Page } from "./model/page";
@Injectable()
export class AnnouncementsService {
    private announcements: Announcement[] = [];
    constructor(private favoriteService: FavoriteService, private http: HttpClient, private apiUrlProvider: ApiUrlProvider) {
    }
    loadAnnouncements(): Observable<any> {

        return this.http.get<any>(this.apiUrlProvider.getBaseURL() + 'announcements');
    }
    setAnnouncements(announcements: Announcement[]) {
        this.announcements = announcements;
    }
    getAnnouncements() {
        return this.announcements.slice();
    }

    getAnnouncement(id: string) {
        return this.http.get<Announcement>(this.apiUrlProvider.getBaseURL() + `announcements/${id}`);
    }
    addToFavorite(announcement: Announcement) {
        this.favoriteService.addFavoriteAnnouncement(announcement);
    }
    changePage(page: Page) {

        const params = new HttpParams()
            .set('page', page.number.toString())
            .set('size', page.size.toString())
            .set('totalElements', page.totalElements.toString())
            .set('totalPages', page.totalPages.toString())

        // console.log("Hello from service");
        return this.http.get<any>(this.apiUrlProvider.getBaseURL() + 'announcements', { params: params });
    }
    filterByTitle(title: string): Observable<any>{
        const params = new HttpParams()
            .set('sortBy', title)
        // console.log("Hello from service");
        return this.http.get<any>(this.apiUrlProvider.getBaseURL() + 'announcements', { params: params });
    }
}
import { Observable } from 'rxjs';

export interface CustomTableColumn {
  displayName: Observable<string>;
  id: string;
  isSortable: boolean;
  isVisible: boolean;
  width?: string;
}

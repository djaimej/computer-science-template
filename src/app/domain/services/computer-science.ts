import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISemesterItem } from '../interfaces';
import { Plan } from '../plan';

@Injectable({
  providedIn: 'root'
})
export class ComputerScienceService {
  private searchText = new Subject<string | null>();
  private plan: Plan;

  constructor() {
    this.plan = Plan.getPlan();
  }

  public getAllSemesters(): ISemesterItem[] {
    return this.plan.semesters;
  }

  public getAllSubtopicPaths(): string[] {
    return this.plan.subtopicPaths;
  }

  public getSearchText(): Observable<string | null> {
    return this.searchText.asObservable();
  }

  public search(text: string) {
    this.searchText.next(text);
  }

  public clearSearch(): void {
    this.searchText.next(null);
  }

  public removeAccents(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}

import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ComputerScienceService } from '@services/computer-science';
import { IOrderedObject, ISemesterItem, ISubjectItem, ITopicItem } from '@models/interfaces/general';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  imports: [CommonModule],
  templateUrl: './general.html',
  styleUrl: './general.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class General implements OnInit {
  public semesters: ISemesterItem[];
  public showResults: WritableSignal<boolean> = signal(false);
  public result: WritableSignal<string> = signal('');
  public results: {
    subjects: { id: string; tree: number[]; name: string; }[],
    topics: { id: string; tree: number[]; name: string; subjectName: string; }[],
    subtopics: { id: string; tree: number[]; name: string; topicName: string; subjectName: string; }[],
  } = { subjects: [], topics: [], subtopics: [] };

  constructor(
    private computerScienceService: ComputerScienceService,
    private router: Router
  ) {
    this.semesters = [];
  }

  public ngOnInit(): void {
    this.semesters = this.computerScienceService.getAllSemesters();
    this.computerScienceService.getSearchText().subscribe(text => {
      this.results.subjects = [];
      this.results.topics = [];
      this.results.subtopics = [];
      this.showResults.set(false);
      if (text) {
        const searchText = this.computerScienceService.removeAccents(text).toLowerCase();
        this.semesters.forEach((semester, iSe) => {
          /* SUBJECTS */
          const subjectsResult: ISubjectItem[] = semester.subjects.filter(
            subject => this.computerScienceService.removeAccents(subject.name).toLowerCase().includes(searchText)
          );
          subjectsResult.forEach((subject) => {
            console.log(subject);
            this.results.subjects.push({
              id: subject.id,
              name: subject.name,
              tree: [iSe]
            });
          });
          semester.subjects.forEach((subject, iSu) => {
            /* TOPICS */
            const topicsResult: ITopicItem[] = subject.topics.filter(
              topic => this.computerScienceService.removeAccents(topic.name).toLowerCase().includes(searchText)
            );
            topicsResult.forEach((topic) => {
              this.results.topics.push({
                id: topic.id,
                name: topic.name,
                subjectName: subject.name,
                tree: [iSe, iSu]
              });
            });
            subject.topics.forEach((topic, iTo) => {
              /* SUBTOPICS */
              const subtopicsResult: IOrderedObject[] = topic.subtopics.filter(
                subtopic => this.computerScienceService.removeAccents(subtopic.name).toLowerCase().includes(searchText)
              );
              subtopicsResult.forEach((subtopic) => {
                this.results.subtopics.push({
                  id: subtopic.id,
                  name: subtopic.name,
                  subjectName: subject.name,
                  topicName: topic.name,
                  tree: [iSe, iSu, iTo]
                });
              });
            })
          })
        });
        this.showResults.set(this.results.subjects.length > 0 || this.results.topics.length > 0 || this.results.subtopics.length > 0);
      } else {
        this.showResults.set(false);
      }
    });
  }

  public viewSubtopic(semesterOrder: number, subjectOrder: number, topicOrder: number, subtopicOrder: number): void {
    const file = `${semesterOrder}${subjectOrder}${topicOrder}${subtopicOrder}`;
    const url = this.router.serializeUrl(this.router.createUrlTree([semesterOrder, subjectOrder, file]));
    window.open(url, '_blank');
  }

  public viewResult(id: string, semester: number, subject?: number, topic?: number): void {
    this.semesters.forEach(se => {
      se.visible = false;
      se.subjects.forEach(su => {
        su.visible = false;
        su.topics.forEach(to => to.visible = false);
      });
    });
    this.semesters[semester].visible = true;
    if (subject !== undefined) {
      this.semesters[semester].subjects[subject].visible = true;
      if (topic !== undefined) {
        this.semesters[semester].subjects[subject].topics[topic].visible = true;
      }
    }
    this.computerScienceService.clearSearch();
    this.result.set(id);
    setTimeout(() => {
      this.showResults.set(false);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1000);
  }

}

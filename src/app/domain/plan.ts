import { IRawSubject, ISemesterItem, ISubjectItem } from "./interfaces";
import { SEMESTER1, SEMESTER2, SEMESTER3, SEMESTER4, SEMESTER5, SEMESTER6, SEMESTER7, SEMESTER8 } from "./semesters";

export class Plan {
    private static plan: Plan;
    private static _semesters: Array<ISemesterItem>;
    private static _subtopicPaths: Array<string>;

    public static initialize(): void {
        this._semesters = [
            {
                id: 'semester-1', name: 'Semestre 1', order: 1, subjects: Plan.parseSubjects(1, SEMESTER1), visible: false
            },
            {
                id: 'semester-2', name: 'Semestre 2', order: 2, subjects: Plan.parseSubjects(2, SEMESTER2), visible: false
            },
            {
                id: 'semester-3', name: 'Semestre 3', order: 3, subjects: Plan.parseSubjects(3, SEMESTER3), visible: false
            },
            {
                id: 'semester-4', name: 'Semestre 4', order: 4, subjects: Plan.parseSubjects(4, SEMESTER4), visible: false
            },
            {
                id: 'semester-5', name: 'Semestre 5', order: 5, subjects: Plan.parseSubjects(5, SEMESTER5), visible: false
            },
            {
                id: 'semester-6', name: 'Semestre 6', order: 6, subjects: Plan.parseSubjects(6, SEMESTER6), visible: false
            },
            {
                id: 'semester-7', name: 'Semestre 7', order: 7, subjects: Plan.parseSubjects(7, SEMESTER7), visible: false
            },
            {
                id: 'semester-8', name: 'Semestre 8', order: 8, subjects: Plan.parseSubjects(8, SEMESTER8), visible: false
            },
        ];
        this._subtopicPaths = this._semesters.flatMap(semester => semester.subjects).flatMap(subject => subject.topics).flatMap(topic => topic.subtopics).map(subtopic => subtopic.path);
    }

    public static getPlan(): Plan {
        if (!this.plan) {
            this.plan = new Plan();
            this.initialize();
        }
        return this.plan;
    }

    public get semesters(): Array<ISemesterItem> {
        return Plan._semesters;
    }

    public get subtopicPaths(): Array<string> {
        return Plan._subtopicPaths;
    }

    private static parseSubjects(semester: number, semesterSubjects: IRawSubject[]): ISubjectItem[] {
        const subjects: ISubjectItem[] = semesterSubjects.map((subject, sjI) => {
            return {
                id: `subject-${semester}${sjI}`,
                order: sjI + 1,
                name: subject.name,
                topics: subject.topics.map((topic, toI) => {
                    return {
                        id: `topic-${semester}${sjI}${toI}`,
                        name: topic.name,
                        order: toI + 1,
                        subtopics: topic.subtopics.map((subtopic, stI) => {
                            return { id: `subtopic-${semester}${sjI}${toI}${stI}`, name: subtopic, order: stI + 1, path: `${semester}/${sjI + 1}/${semester}${sjI + 1}${toI + 1}${stI + 1}` }
                        }),
                        visible: false
                    }
                }),
                visible: false,
            }
        });
        return subjects
    }

}

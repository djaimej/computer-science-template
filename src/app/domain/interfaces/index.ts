export interface IBasicObject {
    id: string;
    name: string;
}

export interface IOrderedObject extends IBasicObject {
    order: number;
}

export interface IRawSubject {
    name: string;
    topics: Array<{name: string, subtopics: string[]}>;
}

export interface ISemesterItem extends IOrderedObject {
    subjects: ISubjectItem[];
    visible: boolean;
}

export interface ISubjectItem extends IBasicObject {
    topics: ITopicItem[];
    visible: boolean;
}

export interface ITopicItem extends IOrderedObject {
    subtopics: ISubTopicItem[];
    visible: boolean;
}

export interface ISubTopicItem extends IOrderedObject {
    path: string;
}



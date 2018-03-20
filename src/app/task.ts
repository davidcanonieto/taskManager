export class Task {
    constructor(
        public title: string,
        public assignedUser: string,
        public priority: number,
        public parent: number,
        public content: string,
        public href: string,
        public date: Date
    ) { }
}

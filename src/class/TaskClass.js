export default class TaskItem {

    constructor(text, priority, id) {
        let x = new Date()
        let month = x.getMonth() + 1
        let day = x.getDate() < 10 ? `0${x.getDate()}`: x.getDate() 
        
        this.id = id
        this.task = text
        this.priority = priority
        this.complete = false
        this.time = `${month}/${day}`
    }
}
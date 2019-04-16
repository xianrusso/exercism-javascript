export class GradeSchool {
	constructor() {
		this.students = {};
	}
	roster() {
		return JSON.parse(JSON.stringify(this.students));	
	}
	add(name, grade) {
		this.students[grade] = this.grade(grade).concat(name).sort();
	}
	grade(grade) {
		const students = this.roster()[grade] || [];
		return students.sort();
	}
}

const students = [];
students.push({이름: '구름', 국어: 87, 영어:98, 수학:88, 과학:90});
students.push({이름: '별이', 국어: 92, 영어:98, 수학:96, 과학:88});
students.push({이름: '겨울', 국어: 76, 영어:96, 수학:94, 과학:86});
students.push({이름: '바다', 국어: 98, 영어:52, 수학:98, 과학:92});

for (const studnet of students) {
    studnet.getSum = function(){
        return this.국어 + this.영어 + this.수학 + this.과학;
    }
}

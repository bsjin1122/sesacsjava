const students = [];
students.push({�̸�: '����', ����: 87, ����:98, ����:88, ����:90});
students.push({�̸�: '����', ����: 92, ����:98, ����:96, ����:88});
students.push({�̸�: '�ܿ�', ����: 76, ����:96, ����:94, ����:86});
students.push({�̸�: '�ٴ�', ����: 98, ����:52, ����:98, ����:92});

for (const studnet of students) {
    studnet.getSum = function(){
        return this.���� + this.���� + this.���� + this.����;
    }
}

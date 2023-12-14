/**
 * 접근제어자
 * access modifier
 * => public private proteced
 */

class Employee {
  // 필드
  private name: string; //제한 클래스 내부 아니면 어디든 접근 불가
  protected age: number; //외부는 불가하지만 파생된곳에서는 가능
  position: string;

  //생성자 => 생성자에 접근제어자를 붙일거면 필드는 삭제해야한다.
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

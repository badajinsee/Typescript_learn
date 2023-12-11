// unknow 타입

function unknowExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknowVar: unknown;

  // let num : number = unknowVar;
  // let str : string = unknowVar;
  // let bool : boolrean = unknowVar
}

//  never 타입

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1 : never = 10;
  // let never1 : never = "string";
  // let never1 : never = true;
}

// void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voiVar: void = undefined;
}

// any 타입 (never타입은 안됨)
// 치트키

function anyExam() {
  let unknowVar: unknown;
  let anyVar: any;
  let undefined: undefined;

  anyVar = unknowVar;

  undefined = anyVar;
}

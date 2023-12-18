/*
Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. 
Наприклад, тип значення для кожного ключа може бути число | рядок.
*/
interface ITask01 {
  [key: string]: number | string;
}

/*
Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. 
Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
*/
interface ITask02 {
  [key: string]: (...rest: any[]) => any;
}

/*
Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. 
Ключі повинні бути числами, а значення - певного типу.
*/
interface ITask03 {
  [key: number]: string | number | boolean | object;
}

/*
Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
Наприклад, ви можете мати властивості типу name: string 
та індексну сигнатуру для додаткових динамічних властивостей.
*/
interface ITask04 {
  taskName: string;
  employerName: string;
  [key: string]: string;
}

/*
Створіть два інтерфейси, один з індексною сигнатурою, 
а інший розширює перший, додаючи специфічні властивості.
*/
interface ITask05Base {
  [key: string]: string;
}

interface ITask05 extends ITask05Base {
  additionValue: string;
}

/*
Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, 
чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
*/
function checkNumberTypeValues(param: ITask01): boolean {
  const arrayOfValues = Object.values(param);
  arrayOfValues.forEach((element) => {
    if (typeof element !== "number") return false;
  });
  return true;
}

//test readonly
interface IUser {
  readonly [key: string]: string;
}

const user: IUser = { name: "Joe" };

user.name;

//user.name = "Joe";

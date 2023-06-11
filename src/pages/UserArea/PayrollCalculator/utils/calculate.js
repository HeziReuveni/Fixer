export const calculateResult = (salary, withKeren, withCar, priceCar) => {
  const boolList = [
    withCar === false && withKeren === false,
    withCar === false && withKeren === true,
    withCar === true && withKeren === false,
    withCar === true && withKeren === true,
  ];
  const rangeSalary = [
    salary <= 6450,
    6450 < salary && salary <= 9240,
    9240 < salary && salary <= 14840,
    14840 < salary && salary <= 20620,
    20620 < salary && salary <= 42910,
    42910 < salary && salary <= 55270,
    55270 < salary,
  ];
  const possessionCar = priceCar * 0.0248;
  if (boolList[0] && rangeSalary[0]) {
    return [salary * 0.9, salary * 1.3];
  } else if (boolList[0] && rangeSalary[1]) {
    return [salary * 0.86, salary * 1.3];
  } else if (boolList[0] && rangeSalary[2]) {
    return [salary * 0.8, salary * 1.3];
  } else if (boolList[0] && rangeSalary[3]) {
    return [salary * 0.69, salary * 1.3];
  } else if (boolList[0] && rangeSalary[4]) {
    return [salary * 0.65, salary * 1.3];
  } else if (boolList[0] && rangeSalary[5]) {
    return [salary * 0.53, salary * 1.3];
  } else if (boolList[0] && rangeSalary[6]) {
    return [salary * 0.5, salary * 1.3];
  } else if (boolList[1] && rangeSalary[0]) {
    return [salary * 0.875, salary * 1.375];
  } else if (boolList[1] && rangeSalary[1]) {
    return [salary * 0.835, salary * 1.375];
  } else if (boolList[1] && rangeSalary[2]) {
    return [salary * 0.775, salary * 1.375];
  } else if (boolList[1] && rangeSalary[3]) {
    return [salary * 0.665, salary * 1.375];
  } else if (boolList[1] && rangeSalary[4]) {
    return [salary * 0.625, salary * 1.375];
  } else if (boolList[1] && rangeSalary[5]) {
    return [salary * 0.505, salary * 1.375];
  } else if (boolList[1] && rangeSalary[6]) {
    return [salary * 0.475, salary * 1.375];
  } else if (boolList[2] && rangeSalary[0]) {
    return [(salary - possessionCar) * 0.9, salary * 1.3];
  } else if (boolList[2] && rangeSalary[1]) {
    return [(salary - possessionCar) * 0.86, salary * 1.3];
  } else if (boolList[2] && rangeSalary[2]) {
    return [(salary - possessionCar) * 0.8, salary * 1.3];
  } else if (boolList[2] && rangeSalary[3]) {
    return [(salary - possessionCar) * 0.69, salary * 1.3];
  } else if (boolList[2] && rangeSalary[4]) {
    return [(salary - possessionCar) * 0.65, salary * 1.3];
  } else if (boolList[2] && rangeSalary[5]) {
    return [(salary - possessionCar) * 0.53, salary * 1.3];
  } else if (boolList[2] && rangeSalary[6]) {
    return [(salary - possessionCar) * 0.5, salary * 1.3];
  } else if (boolList[3] && rangeSalary[0]) {
    return [(salary - possessionCar) * 0.875, salary * 1.375];
  } else if (boolList[3] && rangeSalary[1]) {
    return [(salary - possessionCar) * 0.835, salary * 1.375];
  } else if (boolList[3] && rangeSalary[2]) {
    return [(salary - possessionCar) * 0.775, salary * 1.375];
  } else if (boolList[3] && rangeSalary[3]) {
    return [(salary - possessionCar) * 0.665, salary * 1.375];
  } else if (boolList[3] && rangeSalary[4]) {
    return [(salary - possessionCar) * 0.625, salary * 1.375];
  } else if (boolList[4] && rangeSalary[5]) {
    return [(salary - possessionCar) * 0.505, salary * 1.375];
  } else if (boolList[3] && rangeSalary[6]) {
    return [(salary - possessionCar) * 0.475, salary * 1.375];
  }
};

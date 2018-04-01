
export function currencyFormat(pennies: number): string {
  return `$ ${(pennies/100).toFixed(2)}`
}

export function getFib(i: number): number {
let a: number = 1
let b: number = 1
let c: number
  if(i<3){
    return 1
  }
  for(let n=3;n<=i;n++) {
    c=a+b
    a=b
    b=c
  }
  return c
}

export function fizzbuzz(n: number) :string {
  let a: string = ''
  if(n%3==0) {
    a += 'fizz'
  }
  if(n%5==0) {
    a+= 'buzz'
  }
  if(a==='') {
    a=n.toString();
  }
  return a
}

const hello = (name: string): string => {
	return `Hello ${name}`;
}

const sayHi: string = hello('Ben');

console.log(sayHi);

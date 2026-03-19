
// `interface` er en måte å definere objekter/typer i TypeScript
// Her tar vi inn et objekt med en variabel `name` som er en streng
interface GreetingProps {
    name: string;
  }
  
  function Greeting({ name }: GreetingProps) {
    return <h1>Hei, {name}!</h1>;
  }
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

_Prima di partire a scrivere codice poniamoci qualche domanda:_

Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

# creo una variabile "word";

# richiamo un ciclo for per stampare i numeri da 1 a 100;

# a inizio ciclo assegno a "word" il contatore;

# se il contatore è divisibile per 3 (se si)

- {assegno "Fizz" a "word"}

# se il contatore è divisibile per 5 (se si)

- (verifico se "word" è uguale a "Fizz") { a "word" aggiungo "Buzz"}
- altrimenti {a "word" assegno "Buzz"}

# alla fine del ciclo stampo "word";

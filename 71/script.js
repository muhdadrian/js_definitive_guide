// When to Use const

// There are two schools of thought about the use of the const keyword. One approach is to use const only for values that are fundamentally unchanging, like the physical constants shown, or program version numbers, or byte sequences used to identify file types, for example.

// Another approach recognizes that many of the so-called variables in our program don’t actually ever change as our program runs. In this approach, we declare everything with const, and then if we find that we do actually want to allow the value to vary, we switch the declaration to let. This may help prevent bugs by ruling out accidental changes to variables that we did not intend.

// In one approach, we use const only for values that must not change. In the other, we use const for any value that does not happen to change. I prefer the former approach in my own code.

// JavaScript allows us to declare the loop variable as part of the loop syntax itself, and this is another common way to use let:

for (let i = 0, len = data.length; i < len; i++) console.log(data[i]);
for (let datum of data) console.log(datum);
for (let property in object) console.log(property);

// It may seem surprising, but you can also use const to declare the loop “variables” for for/in and for/of loops, as long as the body of the loop does not reassign a new value. In this case, the const declaration is just saying that the value is constant for the duration of one loop iteration:

for (const datum of data) console.log(datum);
for (const property in object) console.log(property);

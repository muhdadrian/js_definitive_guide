// Explicit Conversions

/*
- The toString() method defined by the Number class accepts an optional arg that specifies a radix, or base, for the conversion.
- If you do not specify the arg, the conversion is done in base 10.
- However, you can also convert numbers in other bases (between 2 and 36).
*/

let n = 17;
let binary = '0b' + n.toString(2);
console.log(binary); // binary == "0b10001"
let octal = '0o' + n.toString(8);
console.log(octal); // octal == "0o21"
let hex = '0x' + n.toString(16);
console.log(hex); // hex == "0x11"

// check the table at 67

/*
| Decimal | Binary | Octal | Hex |
| ------- | ------ | ----- | --- |
| 17      | 10001  | 21    | 11  |

In binary, 17 = 16 + 1
In octal, 17 = 2×8 + 1
In hex, 17 = 1×16 + 1
*/

/*
Binary → base 2
Octal → base 8
Hexadecimal → base 16
Decimal (normal numbers) → base 10

1. Binary (base 2)
Digits can only be 0 or 1.
Binary 10001 means:

1×2⁴ + 0×2³ + 0×2² + 0×2¹ + 1×2⁰
= 16 + 0 + 0 + 0 + 1
= 17

In binary, 17 = 16 + 1
It means:
16 is the highest power of 2 smaller than 17 → (2⁴ = 16)
The remaining 1 is 2⁰ = 1
So 17 is represented as 10001₂
*/

/*
2. Octal (base 8)
Digits go from 0 to 7.
To convert 17 to octal:
Largest power of 8 less than 17 is 8¹ = 8
17 ÷ 8 = 2 remainder 1

So:
17 = 2×8 + 1

Therefore, in octal, 17 is written as 21₈.
*/

/*
3. Hexadecimal (base 16)
Digits go from 0 to 15, but 10–15 are written as A, B, C, D, E, F.
To convert 17 to hex:
Largest power of 16 less than 17 is 16¹ = 16
17 ÷ 16 = 1 remainder 1

So:
17 = 1×16 + 1

Therefore, in hex, 17 is written as 11₁₆.
 */

/*
 | Base             | Representation | Meaning       |
 | ---------------- | -------------- | ------------- |
 | **Binary (2)**   | `10001₂`       | 16 + 1        |
 | **Octal (8)**    | `21₈`          | 2×8 + 1       |
 | **Hex (16)**     | `11₁₆`         | 1×16 + 1      |
 | **Decimal (10)** | `17₁₀`         | normal number |
 */

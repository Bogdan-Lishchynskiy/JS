 function theorem(a, b) {
     if ((a > 0) && !(isNaN(a)) && (b > 0) && !(isNaN(b)))
         return Math.sqrt(a * a + b * b);
     else {
         return false
     };
 }
 console.log(theorem('woww', 2));
 console.log(theorem(3, 4));
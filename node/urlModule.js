const myURL = new URL('https://www.example.org/course/programing?order=views&level=1');

console.log(myURL.hostname); // www.example.org

console.log(myURL.pathname); // /course/programing

console.log(myURL.searchParams); // URLSearchParams { 'order' => 'seen', 'level' => '1' }

console.log(myURL.searchParams.get('order')); 
console.log(myURL.searchParams.get('level')); 
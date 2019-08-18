### My First Async I/O
###### (Exercise 4 of 13)
Write a program that uses a single __asynchronous__ filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running *cat file | wc -l*.
The full path to the file to read will be provided as the first command-line argument.

___
##### HINTS
The solution to this problem is almost the same as the previous problem except you must now do it __the Node.js way__: asynchronous.

Instead of *fs.readFileSync()* you will want to use *fs.readFile()* and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument. To learn more about callbacks, check out:
__(https://github.com/maxogden/art-of-node#callbacks)__.

Remember that idiomatic Node.js callbacks normally have the signature:
    ```javascript
    function callback (err, data) { /* ... */ }
    ```
so you can check if an error occurred by checking whether the first argument is truthy. If there is no error, you should have your *Buffer object as the second argument. As with readFileSync()*, you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a *String* instead of a *Buffer*.

___
###### » To print these instructions again, run:
    learnyounode print
###### » To execute your program in a test environment, run:
    learnyounode run MyFirstAsyncIO.js
###### » To verify your program, run:
    learnyounode verify MyFirstAsyncIO.js
###### » To access the main menu, run:
    learnyounode

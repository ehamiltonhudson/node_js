### HTTP Client
###### (Exercise 7 of 13)

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of __each "data" event from the response to a new line on the console (stdout)__.

___
##### HINTS
For this exercise you will need to use the *http* core module.

The *http.get()* method is a shortcut for simple GET requests, use it to  simplify your solution. The first argument to *http.get()* can be the URL you want to GET; provide a callback as the second argument.

Unlike other callback functions, this one has the signature:
    ```javascript
      function callback (response) { /* ... */ }
      ```

Where the *response* object is a Node __Stream__ object. You can treat Node Streams as objects that emit events. The three events that are of most interest are: "data", "error" and "end". You listen to an event like so:
    ```javascript
    response.on("data", function (data) { /* ... */ })
    ```

The "data" event is emitted when a chunk of data is available and can be processed. The size of the chunk depends upon the underlying data source.

The *response* object / Stream that you get from *http.get()* also has a *setEncoding()* method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node *Buffer* objects which you have to explicitly convert to Strings.

___
###### » To print these instructions again, run:
    learnyounode print
###### » To execute your program in a test environment, run:
    learnyounode run HttpClient.js
###### » To verify your program, run:
    learnyounode verify HttpClient.js
###### » To access the main menu, run:
    learnyounode

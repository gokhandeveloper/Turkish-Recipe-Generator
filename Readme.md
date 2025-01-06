## Turkish Recipe App

Practicing React by following the Scrimba lesson
https://www.youtube.com/watch?v=x4rFhThSX04

There are a few key differences between the tutorial and this project:

 - I managed to write some unit tests as well which wasn't covered in this tutorial.
 - This project uses typescript. You will notice a lot of tsx files.
 - It uses OpenAI instead of ClaudeAI.
 - And of course, it only suggests Turkish dish (a little bit prompt engineering  neded there :) )

### Warning
If you are planning to deploy this project, the open AI API key will be visible by inspecting the front end and anyone running this app will be able to see the key
So you will need to build a backend which this front end makes a call and then your backend talks to the open API.
Or something like firebase with serverless architecture.

### How to Run in dev

From the root of the project 

`vite dev`


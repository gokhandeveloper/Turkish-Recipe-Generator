AI Recipe App.
Practicing React by following the Scrimba lesson
https://www.youtube.com/watch?v=x4rFhThSX04

In addition to this tutorial, I managed to write some unit tests as well which wasn't covered in this tutorial.
Also, managed to convert the project to typescript. You will notice a lot of tsx files.
I have also used OPENAI API instead of Claude.

### Warning
If you are planning to deploy this project, the open AI API key will be visible by inspecting the front end and anyone running this app will be able to see the key
So you will need to build a backend which this front end makes a call and then your backend talks to the open API.
Or something like firebase with serverless architecture.
##Introduction:

This application is built for time picker, which can be with any Ionic Framework application.

[View Demo](http://rajeshwarpatlolla.github.io/TimePickerForIonicFramework/demo/ "Demo") 


##Follow the below mentioned steps.

1) First, install Node.js, Bower, Grunt.

2) Run the following command from command prompt.

	> npm install -g cordova ionic

##Project Setup:

1) Move to any folder/workspace from command prompt, using the following command

	> cd DirectoryName

2) Type the following command and press enter.

	> git clone git@github.com:rajeshwarpatlolla/TimePickerForIonicFramework.git

3) Now you will see a message "Cloning into 'TimePickerForIonicFramework'...". Move to "TimePickerForIonicFramework" directory.

	> cd TimePickerForIonicFramework

4) Now install npm modules
    
	> npm install
    
5) Now install bower components / dependencies using

	> bower install

6) Once all the above steps completes successfully, use the following command to run the application.

	> ionic serve

##How to use:

Use the below format in your controller

````javascript
$scope.slots = [
    {epochTime: 12600, step: 15, format: 12},
    {epochTime: 54900, step: 1, format: 24}
];
````
 
Use the below format in your template / html file

````html
<ionic-time-picker etime="slots[0].epochTime" format="slots[0].format" step="slots[0].step">    
    slots[0].epochTime
</ionic-time-picker>
````

1) `ionic-time-picker` is the directive, to which we can pass required vales.

2) `etime` takes epoch time, which will be converted to UTC.
	
3) `format` indicates 12 hour or 24 hour format. It can take two values, 12 or 24.

4) `step` indicates minute increment. It can take two values, 1 or 15.

##Versions:

### 1) v0.1.0
The whole time picker functionality has been implemented.

##Screen Shots:

![12-Hour](https://lh6.googleusercontent.com/-UL18wuskI_A/VNHkGj8tdwI/AAAAAAAADdU/5tBbZcF6_es/w328-h494-no/TimePicker-1.jpg "12-Hour")
![24-Hour](https://lh5.googleusercontent.com/-xgqgH2zRSuA/VNHkGQ6R8cI/AAAAAAAADdQ/5gGJ1nUqmA0/w328-h494-no/TimePicker-2.jpg "24-Hour.")

##Contact:
gmail : rajeshwar.patlolla@gmail.com

github : https://github.com/rajeshwarpatlolla

twitter : https://twitter.com/rajeshwar_9032

facebook : https://www.facebook.com/rajeshwarpatlolla

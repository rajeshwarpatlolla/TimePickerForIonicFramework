[![bitHound Score](https://www.bithound.io/github/rajeshwarpatlolla/ionic-timepicker/badges/score.svg)](https://www.bithound.io/github/rajeshwarpatlolla/ionic-timepicker)

##Introduction:

This is an `ionic-timepicker` bower component, which can be used in any Ionic framework's application. No additional plugins required for this component.
This plugin is completely open source. Please rate this plugin @ [Ionic Market](http://market.ionic.io/plugins/ionictimepicker)

[View Demo](http://rajeshwarpatlolla.github.io/TimePickerForIonicFramework/demo/ "Demo")

##Prerequisites.

* node.js, npm
* ionic
* bower
* gulp

##How to use:

1) In your project folder, please install this plugin using bower

`bower install ionic-timepicker --save`

This will install the latest version of this plugin. If you wish to install any specific version(eg : 0.4.0) then
 
`bower install ionic-timepicker#0.4.0 --save`

2) Specify the path of  `ionic-timepicker.bundle.min.js` in your `index.html` file.

````html
<!-- path to ionic -->
<script src="lib/ionic-timepicker/dist/ionic-timepicker.bundle.min.js"></script>
````

3) In your application's main module, inject the dependency `ionic-timepicker`, in order to work with this plugin
````javascript
angular.module('mainModuleName', ['ionic', 'ionic-timepicker']){
//
}
````

4) You can configure this date picker at application level in the config method using the `ionicTimePicker` provider.
Your config method may look like this if you wish to setup the configuration. But this is not mandatory step.

````javascript
.config(function (ionicTimePickerProvider) {
    var timePickerObj = {
      inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
      format: 12,
      step: 15,
      setLabel: 'Set',
      closeLabel: 'Close'
    };
    ionicTimePickerProvider.configTimePicker(timePickerObj);
  })
````
In the above code i am not configuring all the properties, but you can configure as many properties as you can.
 
The properties you can configure are as follows.

**a) inputTime**(Optional) : This is the date object we can pass to the component. You can give any date object to this property. Default value is `new Date()`.

**b) format**(Optional) : This is the date object we can pass to the component. You can give any date object to this property. Default value is `new Date()`.

**c) step**(Optional) : This is the date object we can pass to the component. You can give any date object to this property. Default value is `new Date()`.

**d) setLabel**(Optional) : The label for `Set` button. Default value is `Set`

**e) closeLabel**(Optional) : The label for `Close` button. Default value is `Close`

5) Inject `ionicTimePicker` in the controller, where you wish to use this component. Then using the below method you can call the timepicker.
````javascript
.controller('HomeCtrl', function ($scope, ionicTimePicker) {

    var ipObj1 = {
        callback: function (val) {      //Mandatory
          if (typeof (val) === 'undefined') {
            console.log('Time not selected');
          } else {
            var selectedTime = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
          }
        },
        inputTime: 50400,
        format: 12,
        setLabel: 'Set2'
      };
      ionicTimePicker.openTimePicker(ipObj1);
};
````

Apart from the config method, you can re configure all options in the controller also. If you again set any of the properties, they will be overridden by the values mentioned in the controller. This will be useful if there are multiple date pickers in the app, which has different properties.

In all the above steps the only mandatory thing is the `callback` where you will get the selected date value.

    
##Screen Shots:

Once you are successfully done with the above steps, you should be able to use this plugin.

The first screen shot shows the popup and the second shows the modal of this plugin.

### iOS : 
<img src="https://lh3.googleusercontent.com/RZmHEf19w3ZozSeIivFYzKfhQAydDPA7xfGgZHzPadYNG32_BpeFnQRin6LTapfzf1asljfxEpV48GpGoU8g1NPOaL-ya10lno1L4Mjefz41FeWCIoW1um5BO1Lu0dRhbgvmUA_C_Q9YiZf6V8MDjAqyNNFkKpdjNDOh3qDPmi1v-XmG9Q-E40G1kdqxDrWMOIF1zhzmpzKaYE35Hp02-eHavfse25J64oyTxoXW1qKFa3yyacPFAs8UkMvJLNjXAryRpVtQwfbkCbac88jgckXAuAeDo7RTMjcT9J0PYufXutT5RlkEr3KMAJqrUSQpoe__iKBSmJCfCcOplVMvRcFUuHq7_4IwJtbqUvWNgL68kgeWsR8HWbBJY5u1uDg3DBuiWWfnKhS1oFu5imjLwfHshsOTT-mjV-VicK_pvcXtaFjkUGdtx436A1JsYN-3QyxqaYHnoedIT1GvKZTiJYNU6_qbUdTfQIZu5s0XPE1ALe56Hhs14zNqcdDYGGa3eyCuyD8qx8LExJZvHtJlJohTJQOUNkSfCKgKItjU6d3LjGpeNmVL9xAKb7UJ9hadqx0Z=w382-h678-no" width="320" height="568" />
<img src="https://lh3.googleusercontent.com/eHFdHG7yAQlVUlARm-i4i0RXje1SBZAAswiYH8-ml-w2nYCPrjQF96qcWpp8ZQwU-Zn4QBkZLJ4kWXGjVJ-kQjTbYvO9KMU4m3LbsA8-iVUPtWbbAHZWSBpaFTmZTvaL4ssCYG1YEZF1tVBHxOkl2Nvunxi4jHjzN1VYLng4fPXc_H2ORGkx93Ns-7rgtaIrbofd36mnUChmkICPMgHa-mitLHe7pBoMQQsWF3IqpFmb8X6NAOHMix5BcGIYMtGYig1iZgY3U1ppPSu6u67sq3b3HKJfAsR12x7CK4uZyUGmv5t3V6O7bKW4qwlqyq9Q7Xw_wJ_RL4YI874daIdLYxnIwv2406Fiz8CvJSHTHyznsBONvPMH58FOjOUjreHemUxGqh3CsaZaNFHPjEV1tQJTYBwe4tlUNbDU3iaJACqyTAMjj93HD-LJDxrbMUBgQKVFshF0i_SCfvid96JiHfiw0t6udFU3V26Gm80FpNb5XRfvsDNNpnY35U0Ei5HMigy2_Tb4LeFppsFjo0oNRW5o_ncGUkjdWl7M-fWNK4G9lljmg8zvPD4AP8QIbU-iWkAx=w382-h678-no" width="320" height="568" />

### Android : 
<img src="https://lh3.googleusercontent.com/E6lLfSOet7X5jNIRfS-OAkbi2783d7lVjc__xkVXa6AgWz-Rhqb0RQF0Zlez_JC4k5FSfGTZerO0fmUjx626fOSBTs78R8wE19U67sHeKss19qHqU5pt84loNyXOHKLa2iNYT9BnN0hrpVQYdg65c9vhQyeqTBmuz79TehSnsh3kj_ZfQb8juLkYkkWPXkAwKu7iErPG0SbHSutX_EiEtu89Hr1YClXQDDb0U_ca_7kBUFei8KVtwce9qAnGvWnZVNq_bzRO9pDGWDhsFv2tZg5986S8MVC0SgmzsBtwCKGkJIth_nGOSR1ezzLTFcIiWJ8mjMi5twYJ1gWgVG7aDl3T3JF0-Z_FI3AVE7R4xY3_1_Z3r6p7UoGGNfq7oi5n3pJobC80m-SfQYf3Am3Db-zy1n-QxuQQrNTsJFmjQ-YeWX9O-0H07xpPgzUVWNk7ybqzHDj9gSAhaUIlZ0P5de0CEVkmse3fDskHcJaUUiuLLg7GRjfeUO80dNTAXPapkbIGqeXR1bVCPoYSYS1BE4gXqVcaF02eZN2AfPr6-XtLmmNa-rvvNVo0-nSG93onkMhi=w382-h678-no" width="360" height="640" />
<img src="https://lh3.googleusercontent.com/d2dRpy0mZ-ivfy48bfXxH8oXQ2w3L21evHZstdTc5Z2z4ukYlSakGAFdnnNJknGx_zRgdUFC5AcTUWO9XyccTc-qzEbnwEq9Kqd6JSH1YKGDhrK0zsx1qGrtn1MNlg2Fa9TUjt_U8SlGQEWin5h8Zqyp93bevDHe_15KS5pXp7WHjpI-eZtWJqUOObnnY5e_54cbx5Rw3Veh25nhYQUyPxIMaHDMr-dUyOKhxVP1dz7keAjD9vqH1XJwX6kkCNSSn-DeZOG6vXqjOgPlv1FQpkG7uEc2Y84bIbBqFcIR5XSIDBppPYpt_tDs20-ZgDLoY7-59mXEnclS9OZlFcTN_SCHsEjQ8NTsXh8jiJWSQsVx0UF2xumCjd8sLLGx3slv2xYv4KuEtzW5fKsgpeEKFheXnwBtLzxwqavlATNe2x3QWLHekR2eFCDpaGhU_m-aCoo-CD-Fpil-VihqhAcJOYBthPdDdgUhahNJHaJaShN1SNj4faoYIUGNboAsmJNcK92448BlH8NUTSWScu3s1tP3W9xd1DDjUlVaNbIyMPpEITNBHAyvzOn5Ddqpa54sPVbJ=w382-h678-no" width="360" height="640" />


##CSS Classes:

###popup
<img src="https://lh3.googleusercontent.com/O4DlaheQZM_s-xC85sF-AJIGmSpNFRuZFEtNClCimRDRnrk3zGEfumJrn9J75jtS5A53PMi5FiinH-S-D7nMwe4XdHbwPnWvGGuECdMA5aUPt5vB1_wMVa9kDZhf7BHJ3rxGORqIhKk5LcyOMuMj5dN5tB80KPgJ4YjQvk3P4EI8HMpP9FRhTBCfDqQzxNbl9qLFaos89YJzuwL6w30-GIFYhuHzO8I7s-kR5NZ5ocbVuhCGWqlnkcGJUUApOvll5410RBQmIUIdJg2goxDZatITYiBSpuzPFgSST1LqphZwpjnxcNYqvHNqScqyGWvLLqbpeQ5_a6JrtOSo0EtTrfh7C_lDIcg_RA9gatAo5_4WfJiTZw6tHVAXItUvr8aBIokjVebn6XXP6PUWOp1oj30_PgQ-XGe56mE2RSAYfiEWIefHixJrqwg3IEQ60JFeHUxnwWY-rptVew6s3SF2m81p1_Z3A1x-cuZrUmwHPLcDV2s7mxTQxyt7QeEWXbAd4foznBvpBeIH1n2iuAvFUG16QrMptpwxigkPi1R8kmhCWDRqMox14ZWe7-5IJuMFlAab=w382-h678-no" width="360" height="640" />

#### 1) prev_btn_section
#### 2) next_btn_section
#### 3) select_section
#### 4) month_select
#### 5) year_select
#### 6) calendar_grid
#### 7) weeks_row
#### 8) selected_date
#### 9) date_col
#### 10) today

You can use the below class to customise popup.  
####ionic_timepicker_popup

The css class names for the buttons are as follows

a) For `Set` button the class name is `button_set` 

b) For `Today` button the class name is `button_today`
 
c) For `Close` button the class name is `button_close` 

##Versions:

### 1) v0.1.0
The whole time picker functionality has been implemented, and can be installed with 

bower install ionic-timepicker --save

### 2) v0.1.1
Directive name has been modified.

### 3) v0.1.2
If the minutes and hours are less than 10, then 0 will be prepended to the value of minutes/hours.

### 4) v0.2.0
Callback function added to get the selected time in to the controller.

### 5) v0.2.1
Class names modified as per [this bug](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/41).

### 6) v0.3.0
Features added to customize this component.

### 7) v0.4.0
Bug fixes : [#48](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/48), [#53](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/53), [#51](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/51)

PR : [#54](https://github.com/rajeshwarpatlolla/ionic-timepicker/pull/54), 

Few additional enhancements added. 

### 8) v0.5.0
#### Features
a) You can configure the ionic-datepicker from the config method. 

##License:
[MIT](https://github.com/rajeshwarpatlolla/ionic-timepicker/blob/master/LICENSE.MD "MIT")

##Contact:
Gmail : rajeshwar.patlolla@gmail.com

Github : https://github.com/rajeshwarpatlolla

Twitter : https://twitter.com/rajeshwar_9032

Facebook : https://www.facebook.com/rajeshwarpatlolla

Paypal : rajeshwar.patlolla@gmail.com

Comment or Rate it : http://market.ionic.io/plugins/ionicTimePicker
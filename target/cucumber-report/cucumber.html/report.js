$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Test",
  "description": "",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6725366300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  As user I want to build computer and add to cart"
    }
  ],
  "line": 5,
  "name": "User should navigate to Computer page successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Computer\" text computer",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 190221600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1183632600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 14
    }
  ],
  "location": "ComputerTest.iShouldSeeTextComputer(String)"
});
formatter.result({
  "duration": 57324500,
  "status": "passed"
});
formatter.after({
  "duration": 776429700,
  "status": "passed"
});
formatter.before({
  "duration": 3017921000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify user should navigate to Desktops page successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click Desktops link desktoplink",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see \"Desktops\" text desktop",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 793256900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickDesktopsLinkDesktoplink()"
});
formatter.result({
  "duration": 535713900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 14
    }
  ],
  "location": "ComputerTest.iShouldSeeTextDesktop(String)"
});
formatter.result({
  "duration": 36659900,
  "status": "passed"
});
formatter.after({
  "duration": 757289000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on \"ADD TO CART\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 29,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 30,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 31,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4073201800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on \"ADD TO CART\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 3301906700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickDesktopsLink()"
});
formatter.result({
  "duration": 500263300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 956085000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 100258500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerTest.iSelectRAM(String)"
});
formatter.result({
  "duration": 94229800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerTest.iSelectHDD(String)"
});
formatter.result({
  "duration": 64077600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerTest.iSelectOS(String)"
});
formatter.result({
  "duration": 70397100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 5450800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CART",
      "offset": 12
    }
  ],
  "location": "ComputerTest.iClickOnButton(String)"
});
formatter.result({
  "duration": 66474400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerTest.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 854408900,
  "status": "passed"
});
formatter.after({
  "duration": 785147700,
  "status": "passed"
});
formatter.before({
  "duration": 2999028300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on \"ADD TO CART\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 590002000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickDesktopsLink()"
});
formatter.result({
  "duration": 510753500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 842922500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 66163500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerTest.iSelectRAM(String)"
});
formatter.result({
  "duration": 85376300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerTest.iSelectHDD(String)"
});
formatter.result({
  "duration": 82445200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerTest.iSelectOS(String)"
});
formatter.result({
  "duration": 58409600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 2124500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CART",
      "offset": 12
    }
  ],
  "location": "ComputerTest.iClickOnButton(String)"
});
formatter.result({
  "duration": 54252100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerTest.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 303562800,
  "status": "passed"
});
formatter.after({
  "duration": 779389400,
  "status": "passed"
});
formatter.before({
  "duration": 3073401300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on \"ADD TO CART\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 584900200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickDesktopsLink()"
});
formatter.result({
  "duration": 554689100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 855961600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 54886500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerTest.iSelectRAM(String)"
});
formatter.result({
  "duration": 86411700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerTest.iSelectHDD(String)"
});
formatter.result({
  "duration": 78566400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerTest.iSelectOS(String)"
});
formatter.result({
  "duration": 58750300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 2284700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CART",
      "offset": 12
    }
  ],
  "location": "ComputerTest.iClickOnButton(String)"
});
formatter.result({
  "duration": 68605200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerTest.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 362271300,
  "status": "passed"
});
formatter.after({
  "duration": 775009200,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2184207400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page suceessfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-suceessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see Message \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 498688200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "LoginPageTest.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 32327600,
  "status": "passed"
});
formatter.after({
  "duration": 742215400,
  "status": "passed"
});
formatter.before({
  "duration": 2853108900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verrify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verrify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"shruti2022@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see error message login unsucessful",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 522566100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti2022@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 95631400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 82393800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 473137600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeErrorMessageLoginUnsucessful()"
});
formatter.result({
  "duration": 33091000,
  "status": "passed"
});
formatter.after({
  "duration": 753953500,
  "status": "passed"
});
formatter.before({
  "duration": 2164336900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verrify that user Should LogIn SuccessFully With Valid Credentials.",
  "description": "",
  "id": "login-test;verrify-that-user-should-login-successfully-with-valid-credentials.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"shruti20222@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"shruti2022\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see \"Log out\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 27900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 558316400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti20222@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 104489800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti2022",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 89776300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 435171700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 14
    }
  ],
  "location": "LoginPageTest.iShouldSeeTab(String)"
});
formatter.result({
  "duration": 40111732700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-TMPB3MR\u0027, ip: \u0027192.168.1.143\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_302\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [241af236471be0c104e3f25841734349, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\nihar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52860}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52860/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 241af236471be0c104e3f25841734349\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:64)\r\n\tat com.nopcommerce.demo.pages.HomePage.varifyLogout(HomePage.java:163)\r\n\tat com.nopcommerce.demo.steps.LoginPageTest.iShouldSeeTab(LoginPageTest.java:65)\r\n\tat ✽.Then I should see \"Log out\" tab(login.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 713692700,
  "status": "passed"
});
formatter.before({
  "duration": 2978499900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verrify that user should LogOut SucessFull",
  "description": "",
  "id": "login-test;verrify-that-user-should-logout-sucessfull",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"shruti20222@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"shruti2022\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on logOut link",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see login",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 521694800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti20222@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 98880100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti2022",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 88887200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 465554900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 20018295500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-TMPB3MR\u0027, ip: \u0027192.168.1.143\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_302\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [52c989b634e8cd407958b667e65dd1c0, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\nihar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52892}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52892/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 52c989b634e8cd407958b667e65dd1c0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clicklogout(HomePage.java:157)\r\n\tat com.nopcommerce.demo.steps.LoginPageTest.iClickOnLogOutLink(LoginPageTest.java:44)\r\n\tat ✽.And I click on logOut link(login.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 803907000,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3014146400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify user should navigate to Register Page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Register\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 596098400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iShouldSeeText(String)"
});
formatter.result({
  "duration": 37488000,
  "status": "passed"
});
formatter.after({
  "duration": 758367700,
  "status": "passed"
});
formatter.before({
  "duration": 2109352800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify that FirstName LastName Email Password And Confirm Password Fields are Mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"First name is required.\" in first name",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see \"Last name is required.\" in  last name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Email is required.\" in email",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see \"Password is required.\" in password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \"Password is required.\" in confirmed password",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 37100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 544243900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 106038200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iShouldSeeInFirstName(String)"
});
formatter.result({
  "duration": 33608700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iShouldSeeInLastName(String)"
});
formatter.result({
  "duration": 30898500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iShouldSeeInEmail(String)"
});
formatter.result({
  "duration": 30792300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iShouldSeeInPassword(String)"
});
formatter.result({
  "duration": 28340500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iShouldSeeInConfirmedPassword(String)"
});
formatter.result({
  "duration": 29272600,
  "status": "passed"
});
formatter.after({
  "duration": 773337500,
  "status": "passed"
});
formatter.before({
  "duration": 2884151500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \"Shruti\" Firstname",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \"Devani\" Lastname",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select dat 12",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select month 11",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select year 1987",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \"shruti20222@gmail.com\" email",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter \"shruti2022\" password",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter \"shruti2022\" confirm passwword",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 545105200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterPageTest.iSelectGender(String)"
});
formatter.result({
  "duration": 60731800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shruti",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterFirstname(String)"
});
formatter.result({
  "duration": 91418100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Devani",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterLastname(String)"
});
formatter.result({
  "duration": 95417700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 13
    }
  ],
  "location": "RegisterPageTest.iSelectDat(String)"
});
formatter.result({
  "duration": 78465200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 15
    }
  ],
  "location": "RegisterPageTest.iSelectMonth(String)"
});
formatter.result({
  "duration": 77528400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1987",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iSelectYear(String)"
});
formatter.result({
  "duration": 71225000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti20222@gmail.com",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 99379000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti2022",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 97165900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti2022",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterConfirmPasswword(String)"
});
formatter.result({
  "duration": 92336200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 767882800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iShouldSee(String)"
});
formatter.result({
  "duration": 30788800,
  "status": "passed"
});
formatter.after({
  "duration": 766586600,
  "status": "passed"
});
});
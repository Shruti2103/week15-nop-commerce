
Feature: Register Test


  Scenario: verify user should navigate to Register Page successfully

    Given I am on homepage
    When  I click on register link
    Then I should see "Register" text

  Scenario: verify that FirstName LastName Email Password And Confirm Password Fields are Mandatory
    Given I am on homePage
    When I click on register link
    And I click on Register button
    And I should see "First name is required." in first name
    And I should see "Last name is required." in  last name
    And I should see "Email is required." in email
    And I should see "Password is required." in password
    And I should see "Password is required." in confirmed password

  Scenario: verify that user should create account successfully
    Given I am on homePage
    When I click on register link
    And I select gender "Female"
    And I enter "Shruti" Firstname
    And I enter "Devani" Lastname
    And I select dat 12
    And I select month 11
    And I select year 1987
    And I enter "shruti20233@gmail.com" email
    And I enter "shruti2022" password
    And I enter "shruti2022" confirm passwword
    And I click on Register button
    Then I should see "Your registration completed"



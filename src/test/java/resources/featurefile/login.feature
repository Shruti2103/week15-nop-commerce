
Feature: Login Test



  Scenario: User should navigate to login page suceessfully
    Given  I am on homepage
    When  I click on login link
    Then  I should see Message "Welcome, Please Sign In!"


  Scenario: Verrify the error message with invalid credentials
    Given  I am on homepage
    When  I click on login link
    And I enter email "shruti2022@gmail.com"
    And I enter password "abc123"
    And I click on login button
    Then I should see error message login unsucessful

    Scenario:  Verrify that user Should LogIn SuccessFully With Valid Credentials.
      Given I am on homepage
      When I click on login link
      And  I enter email "tipu1@gmail.com"
      And  I enter password "abc123"
      And  I click on login button
      Then I should see "Log out" tab

      Scenario: Verrify that user should LogOut SucessFull
        Given I am on homepage
        When  I click on login link
        And I enter email "tipu1@gmail.com"
        And I enter password "abc123"
        And I click on login button
        And  I click on logOut link
        Then I should see login


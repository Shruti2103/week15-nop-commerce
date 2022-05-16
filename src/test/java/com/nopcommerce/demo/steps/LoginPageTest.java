package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginPageTest {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {
     new HomePage().setHomeloginLink();
    }

    @Then("^I should see Message \"([^\"]*)\"$")
    public void iShouldSeeMessage(String message)  {
        Assert.assertEquals("Not navigate to page","Welcome, Please Sign In!",new LoginPage().verifyWelcomeTextMessage());

    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
       new LoginPage().setEmail(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
       new LoginPage().setPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
       new LoginPage().clickOnLogin();
    }





    @And("^I click on logOut link$")
    public void iClickOnLogOutLink() {
        new HomePage().clicklogout();

    }

    @Then("^I should see login$")
    public void iShouldSeeLogin() {
        Assert.assertEquals("Not navigate to page","Log in",new LoginPage().loginText());

    }

    @Then("^I should see error message login unsucessful$")
    public void iShouldSeeErrorMessageLoginUnsucessful() {
        String expectedMessage="Login was unsuccessful. Please correct the errors and try again.\n" +
        "No customer account found";
        String actualMessage= new LoginPage().errorMessagevarify();
        Assert.assertEquals("Not navigate to Page",expectedMessage,actualMessage);

    }

    @Then("^I should see \"([^\"]*)\" tab$")
    public void iShouldSeeTab(String text)  {
       Assert.assertEquals("Not navigate to page",text,new HomePage().varifyLogout());
    }
}

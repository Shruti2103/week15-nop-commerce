package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterPageTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }



    @Given("^I am on homePage$")
    public void iAmOnHomePage() {
    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
      new RegisterPage().clickonRegistrationbutton();
    }

    @And("^I should see \"([^\"]*)\"$")
    public void iShouldSee(String message)  {
        String expectedMessage = "Register";
        String actualMessage = new RegisterPage().registerTextvarify();
        Assert.assertEquals("page not displayed",actualMessage,expectedMessage);
    }

    @And("^I select gender \"([^\"]*)\"$")
    public void iSelectGender(String female)  {
         new RegisterPage().femaleradiobuttonclick();
    }

    @And("^I enter \"([^\"]*)\" Firstname$")
    public void iEnterFirstname(String name)  {
       new RegisterPage().enterFirstName(name);
    }

    @And("^I enter \"([^\"]*)\" Lastname$")
    public void iEnterLastname(String surname)  {
        new RegisterPage().enterLastName(surname);
    }

    @And("^I select dat (\\d+)$")
    public void iSelectDat(String date) {
        new RegisterPage().selectDateofBirth(date);

    }

    @And("^I select month (\\d+)$")
    public void iSelectMonth(String month) {
       new RegisterPage().setmonth(month);
    }

    @And("^I select year (\\d+)$")
    public void iSelectYear(String year) {
        new RegisterPage().setyear(year);
    }

    @And("^I enter \"([^\"]*)\" email$")
    public void iEnterEmail(String email) {
     new RegisterPage().setemailid(email);

    }

    @And("^I enter \"([^\"]*)\" password$")
    public void iEnterPassword(String password)  {

      new RegisterPage().setPassword(password);
    }

    @And("^I enter \"([^\"]*)\" confirm passwword$")
    public void iEnterConfirmPasswword(String confpassword)  {
       new RegisterPage().setConfirmPassword(confpassword);
    }

    @And("^I should see \"([^\"]*)\" in first name$")
    public void iShouldSeeInFirstName(String fname)  {
     Assert.assertEquals("not navigate to page",fname,new RegisterPage().verifyFirstnameError());

    }

    @And("^I should see \"([^\"]*)\" in  last name$")
    public void iShouldSeeInLastName(String lname)  {
     Assert.assertEquals("Not navigate to page",lname,new RegisterPage().verifyLastnameError());
    }

    @And("^I should see \"([^\"]*)\" in email$")
    public void iShouldSeeInEmail(String email1)  {
     Assert.assertEquals("Not navigate to page",email1,new RegisterPage().verifyemailaddress());
    }

    @And("^I should see \"([^\"]*)\" in password$")
    public void iShouldSeeInPassword(String password1)  {
     Assert.assertEquals("Not navigate to page",password1,new RegisterPage().verifypasswordError());
    }

    @And("^I should see \"([^\"]*)\" in confirmed password$")
    public void iShouldSeeInConfirmedPassword(String confpas)  {
     Assert.assertEquals("Not navigate to page",confpas,new RegisterPage().verifyconfirmpassword());
    }

    @Then("^I should see \"([^\"]*)\" text$")
    public void iShouldSeeText(String message){
        String expectedMessage = "Register";
        String actualMessage = new RegisterPage().registerTextvarify();
        Assert.assertEquals("page not displayed",actualMessage,expectedMessage);

    }
}

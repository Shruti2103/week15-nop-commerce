package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.checkerframework.checker.units.qual.C;
import org.junit.Assert;

public class ComputerTest {
    @And("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnComputersTab();
    }



    @And("^I click Desktops link$")
    public void iClickDesktopsLink() {
        new ComputerPage().clickOnDesktopLink();

    }

    @And("^I click on product name \"([^\"]*)\"$")
    public void iClickOnProductName(String arg0)  {
        new DesktopPage().setClickonBuildyourowncomputer();
    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor)  {
        new BuildYourOwnComputerPage().selectprocessorrfromdroppdown(processor);

    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram)  {
        new BuildYourOwnComputerPage().selectRAMfromdroppdown(ram);

    }

    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hdd)  {
        new BuildYourOwnComputerPage().getHdd(hdd);


    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os)  {
        new BuildYourOwnComputerPage().getOsRadio(os);

    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software)  {
        new BuildYourOwnComputerPage().clickOnSoftwareCheckBox(software);

    }

    @And("^I click on \"([^\"]*)\" Button$")
    public void iClickOnButton(String arg0)  {
        new BuildYourOwnComputerPage().clickOnAddToCart();

    }

    @Then("^I should see the message \"([^\"]*)\"$")
    public void iShouldSeeTheMessage(String arg0)  {
      String expectedMessage="The product has been added to your shopping cart";
      String actualMessage= new BuildYourOwnComputerPage().varifytextproductaddedtocart();
        Assert.assertEquals("Not navigate to page",expectedMessage,actualMessage);

    }


    @Then("^I should see \"([^\"]*)\" text computer$")
    public void iShouldSeeTextComputer(String computertext)  {
        String expectedMessage="Computers";
        String actualMessage= new ComputerPage().varifycomputerText();
        Assert.assertEquals("Not navigate to page",expectedMessage,actualMessage);

    }

    @Then("^I should see \"([^\"]*)\" text desktop$")
    public void iShouldSeeTextDesktop(String desktoptext)  {
        String expectedMessage="Desktops";
        String actualMessage= new DesktopPage().verifyDesktopText();
        Assert.assertEquals("Not navigate to page",expectedMessage,actualMessage);
    }

    @And("^I click Desktops link desktoplink$")
    public void iClickDesktopsLinkDesktoplink() {
        new ComputerPage().clickOnDesktopLink();
    }
}

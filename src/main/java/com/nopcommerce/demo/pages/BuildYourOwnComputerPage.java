package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.checkerframework.checker.units.qual.C;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class);

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);

    }

    //- Build your own computer Text
    @CacheLookup

    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement buildYourOwnComputerText;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement processorDropdown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement selectRam;

    //HDD radios
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement HDDradios320;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_6']")
    WebElement HDDradios400;

    //os radio,
    @CacheLookup

    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement VistaPremium;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_8']")
    WebElement VistaHome1;


    //software check boxes
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement TotalCommander1;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement MicrosoftOffice1;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_11']")
    WebElement AcrobatReader1;

    //Add To Card button
    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addCartButton;

    // varify text product has been added to your cart
    @CacheLookup
    @FindBy(xpath = "//p[text()='The product has been added to your ']")
    WebElement addedToCartMessage;

    public String builtyourowncomputertextvarify() {
        log.info("getting  built yourown computer textvarify from " + buildYourOwnComputerText.toString());
        return getTextFromElement(buildYourOwnComputerText);
    }

    public void selectprocessorrfromdroppdown(String text) {
        selectByVisibleTextFromDropDown(processorDropdown, text);
        log.info("Selecting processorr from droppdown" + text + " from dropdown " + processorDropdown.toString());
    }

    public void selectRAMfromdroppdown(String text) {
        selectByVisibleTextFromDropDown(selectRam, text);
        log.info("Selecting RAM fromdroppdown" + text + " from dropdown " + selectRam.toString());
    }

    public void getHdd(String Hddtext) {
        if (Hddtext == "320GB") {
            clickOnElement(HDDradios320);
            log.info("Clicking on HDD radios 320" + HDDradios320.toString());
        } else {
            clickOnElement(HDDradios400);
            log.info("Clicking on HDD radios 400" + HDDradios400.toString());
        }
    }

    public void getOsRadio(String radio) {
        if (radio == "VistaHome") {
            clickOnElement(VistaHome1);
            log.info("Clicking on newsletterbox" + VistaHome1.toString());
        } else {
            clickOnElement(VistaPremium);
            log.info("Clicking on newsletterbox" + VistaPremium.toString());

        }
    }

    public void clickOnSoftwareCheckBox(String software) {
        if (software == "MicrosoftOffice") {
            clickOnElement(MicrosoftOffice1);
            log.info("Clicking on MicrosoftOffice" + MicrosoftOffice1.toString());
        }
        if (software == "TotalCommander") {
            clickOnElement(TotalCommander1);
            log.info("Clicking on TotalCommander" + TotalCommander1.toString());
        }
        if (software == "AcrobatReader") {
            clickOnElement(AcrobatReader1);
            log.info("Clicking on AcrobatReader" + AcrobatReader1.toString());
        }
    }

    public void clickOnAddToCart() {
        clickOnElement(addCartButton);
        log.info("Clicking on AddToCart" + addCartButton.toString());
    }

    public String varifytextproductaddedtocart() {
        log.info("getting varify text product added tocart " + addedToCartMessage.toString());
        return getTextFromElement(addedToCartMessage);
    }


}

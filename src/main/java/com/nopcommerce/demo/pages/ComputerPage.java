package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class ComputerPage extends Utility {
    private static final Logger log= LogManager.getLogger(HomePage.class);

    public ComputerPage() {
        PageFactory.initElements(driver,this);
    }
    // computer text

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement computersText;

    //DesktopsLink
    @CacheLookup@FindBy(xpath = "//img[@title='Show products in category Desktops']")
    WebElement desktopLink;

    //NotebooksLink

    @CacheLookup@FindBy(xpath = "//img[@title='Show products in category Notebooks']")
    WebElement notebooksLink;

    //SoftwareLink
    @CacheLookup@FindBy(xpath = "//img[@title='Show products in category Software']")
    WebElement softwareLink;

    public String varifycomputerText() {
        log.info("getting varify computerText "+computersText.toString());
        return getTextFromElement(computersText);
    }
    public void clickOnDesktopLink() {
        clickOnElement(desktopLink);
        log.info("Clicking on DesktopLink"+ desktopLink.toString());
    }
    public void clickOnNotebooksLink() {
        clickOnElement(notebooksLink);
        log.info("Clicking on NotebooksLink"+ notebooksLink.toString());
    }

    public void clickOnSoftwareLink() {
        clickOnElement(softwareLink);
        log.info("Clicking on SoftwareLink"+ softwareLink.toString());
    }






}

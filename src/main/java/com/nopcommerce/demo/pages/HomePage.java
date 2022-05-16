package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

/**
 * Created by Jay Vaghani
 */
public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement homeloginLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[1]/a[1]")
    WebElement computersTab;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[2]/a[1]")
    WebElement elctronicsTab;

    //Apparel
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[3]/a[1]")
    WebElement apparelTab;

    //Digital Downloads

    @CacheLookup
    @FindBy(linkText = "Digital downloads")
    WebElement digitaldownloadTab;

    //Books
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[5]/a[1]")
    WebElement books;

    //Jewelry
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[6]/a[1]")
    WebElement jewelry;

    //Giftcards

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[7]/a[1]")
    WebElement giftcards;

    // loginlink

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement getLoginLink;

    // Registerlink

    @CacheLookup
    @FindBy(linkText = "Register")
    WebElement getRegisterLink;

    //nopcommerce logo

    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement nopCommerceLogo;

    //my account link
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'My account')]")
    WebElement myaccountlink;

    //logoutlink click and varify
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logoutLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")// needs to find out cropath
    WebElement logout;

    //click on login link
    public void setHomeloginLink() {
        clickOnElement(homeloginLink);
    }

    public void clickOnComputersTab() {
        clickOnElement(computersTab);
        log.info("Clicking on ComputersTab" + computersTab.toString());
    }

    public void clickOnElectronics() {
        clickOnElement(elctronicsTab);
        log.info("Clicking on Electronics" + elctronicsTab.toString());
    }

    public void clickOnappral() {
        clickOnElement(apparelTab);
        log.info("Clicking on appral" + apparelTab.toString());
    }

    public void clickOndigitaldownload() {
        clickOnElement(digitaldownloadTab);
        log.info("Clicking on digitaldownload Tab" + digitaldownloadTab.toString());
    }

    public void clickOnBooks() {
        clickOnElement(books);
        log.info("Clicking on books " + books.toString());
    }

    public void clickOnjewelry() {
        clickOnElement(jewelry);
        log.info("Clicking on jewelry " + jewelry.toString());
    }

    public void clickOngiftcards() {
        clickOnElement(giftcards);
        log.info("Clicking on giftcards " + giftcards.toString());
    }

    public void clickOnLoginLink() {
        clickOnElement(getLoginLink);
        log.info("Clicking on Login Link" + getLoginLink.toString());

    }

    public void clickOnRegisterLink() {
        clickOnElement(getRegisterLink);
        log.info("Clicking on Register Link" + getRegisterLink.toString());
    }

    public void clickonNopCommerce() {
        clickOnElement(nopCommerceLogo);
        log.info("Clicking on nop Commerce Logo" + nopCommerceLogo.toString());
    }

    public void clickonMyAccount() {
        clickOnElement(myaccountlink);
        log.info("Clicking on my accountlink" + myaccountlink.toString());
    }

    public void clicklogout() {
        clickOnElement(logoutLink);
        log.info("Clicking on logout Link" + logoutLink.toString());
    }

    public String varifyLogout() {
        log.info("getting logout text from " + logout.toString());
        return getTextFromElement(logoutLink);
    }


}

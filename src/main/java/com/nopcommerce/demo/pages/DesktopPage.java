package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class DesktopPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class);

    public DesktopPage() {
        PageFactory.initElements(driver, this);
    }
    //- Desktops text


    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Desktops')]")
    WebElement desktopText;

    // Sortby
    @CacheLookup
    @FindBy(id = "products-orderby")
    WebElement sortBy;

    //Display
    @CacheLookup
    @FindBy(id = "products-pagesize")
    WebElement displayBy;

    //selectProductList
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement selectProductList;

    // click on Build your own computer
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/h2[1]/a[1]")
    WebElement clickonBuildyourowncomputer;

    public String verifyDesktopText() {
        log.info("getting verify Desktop text from " + desktopText.toString());
        return getTextFromElement(desktopText);
    }

    public void clickOnSortBy() {
        clickOnElement(sortBy);
        log.info("Clicking on SortBy" + sortBy.toString());
    }

    public void clickOnProductList() {
        clickOnElement(displayBy);
        log.info("Clicking on ProductList" + displayBy.toString());
    }

    public void selectproductlistfromdroppdown(String text) {
        selectByValueFromDropDown(selectProductList, text);
        log.info("Selecting productlist from droppdown" + text + " from dropdown " + selectProductList.toString() + "<br>");
    }

    public void setClickonBuildyourowncomputer() {
        clickOnElement(clickonBuildyourowncomputer);
        log.info("Clicking on Build your own computer" + clickonBuildyourowncomputer.toString());
    }


}

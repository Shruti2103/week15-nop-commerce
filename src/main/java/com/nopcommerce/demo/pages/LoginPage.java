package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

/**
 * Created by Jay Vaghani
 */
public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordField;
    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]")
    WebElement varifyerrormessage;

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement loginLink;



    public void setEmail(String text){
        log.info("Enter email"+text+ " to email field "+emailField.toString());
        sendTextToElement(emailField,text);
    }
    public void setPassword(String text) {
        log.info("Enter email"+text+ " to email field "+passwordField.toString());
        sendTextToElement(passwordField,text);
    }
    public void clickOnLogin() {
        log.info("Clicking on login Button"+ loginButton.toString());
        clickOnElement(loginButton);
    }
    public String verifyWelcomeTextMessage() {
        log.info("getting welcome text from "+welcomeText.toString());
        return getTextFromElement(welcomeText);
    }
    public String errorMessagevarify(){
        log.info("getting varify errormessage text from "+varifyerrormessage.toString());
        return getTextFromElement(varifyerrormessage);
    }

    public String loginText(){
        log.info("getting loginLink text from "+loginLink.toString());
        return getTextFromElement(loginLink);
    }



}

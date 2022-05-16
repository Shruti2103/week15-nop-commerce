package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class RegisterPage extends Utility {
    private static final Logger log= LogManager.getLogger(HomePage.class);

    public RegisterPage() {
        PageFactory.initElements(driver,this);
    }
    // register text varify

    @CacheLookup

    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement verifyRegisterText;

    // male female radio button

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement clickmaleradiobutton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement clickfemaleradiobutton;

    // Firstname
    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstNameField;

    //Lastname
    @CacheLookup
    @FindBy(id = "LastName")
    WebElement lastNameField;


    // Date of Birth date
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dayDropdown;

    //Date of Birthdate Month
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement monthDropdown;

    // Date of Birthdate Year
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement yearDropdown;

    // Email
    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailIdField;

    // password
    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordField;

    //confirmpassword
    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPasswordField;

    // click on Registerbutton
    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement clickOnRegisterButton;

    // errormessage firstname require
    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement firstNameError;

    // errormessage lastname require
    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameError;

    //    errormessage email require
    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailError;

    //    errormessage password  require
    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordError;

    // error message confirm password
    @CacheLookup
    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement confirmPwError;

    // Your registration completed" message,text varify
    @CacheLookup
    @FindBy(xpath = "//div[@class='result' and contains(normalize-space(),'Your registration completed')]")
    WebElement regCompleted;

    // click on continue button
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueBtn;

    public String registerTextvarify() {
        log.info("getting verify Register Text  from "+verifyRegisterText.toString());
        return getTextFromElement(verifyRegisterText);
    }
    public void maleradiobuttonclick() {
        clickOnElement(clickmaleradiobutton);
        log.info("Clicking on male radio button"+ clickmaleradiobutton.toString());
    }
    public void femaleradiobuttonclick() {
        clickOnElement(clickfemaleradiobutton);
        log.info("Clicking on female radio button"+ clickfemaleradiobutton.toString());
    }
    public void enterFirstName(String firstname) {
        sendTextToElement(firstNameField, firstname);
        log.info("Enter email "+firstname+ " to email field "+firstNameField.toString() );

    }
    public void enterLastName(String lastname) {
        sendTextToElement(lastNameField, lastname);
        log.info("Enter email"+lastname+ " to email field "+lastNameField.toString() );

    }
    public void selectDateofBirth(String date){
        selectByValueFromDropDown(dayDropdown,date);
        log.info("Selecting DateofBirth"+date+" from dropdown "+dayDropdown.toString() );
    }


    public void setmonth(String month) {
        selectByValueFromDropDown(monthDropdown, month);
        log.info("Selecting month"+month+" from dropdown "+monthDropdown.toString() );
    }
    public void setyear(String year) {
        selectByValueFromDropDown(yearDropdown, year);
        log.info("Selecting year"+year+" from dropdown "+yearDropdown.toString() );
    }

    public void setemailid(String email) {
        sendTextToElement(emailIdField, email);
        log.info("Enter email"+email+ " to email field "+emailIdField.toString() );
    }
    public void setPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter email"+password+ " to email field "+passwordField.toString() );

    }
    public void setConfirmPassword(String confirmPassword) {
        sendTextToElement(confirmPasswordField, confirmPassword);
        log.info("Enter email"+confirmPassword+ " to email field "+confirmPasswordField.toString() );

    }
    public void clickonRegistrationbutton() {
        clickOnElement(clickOnRegisterButton);
        log.info("Clicking on Register Button"+ clickOnRegisterButton.toString());
    } public String verifyFirstnameError() {
        log.info("getting first Name Error text from "+firstNameError.toString());
        return getTextFromElement(firstNameError);
    }
    public String verifyLastnameError() {
        log.info("getting last Name Error text from "+lastNameError.toString());
        return getTextFromElement(lastNameError);
    }
    public String verifyemailaddress() {
        log.info("getting email Error text from "+emailError.toString());
        return getTextFromElement(emailError);
    }
    public String verifypasswordError() {
        log.info("getting password Error text from "+passwordError.toString());
        return getTextFromElement(passwordError);
    }
    public String verifyconfirmpassword() {
        log.info("getting confirm Pw Error text from "+confirmPwError.toString());
        return getTextFromElement(confirmPwError);
    }
    public String verifyregistrationcomplete() {
        log.info("getting reg Completed  text from "+regCompleted.toString());
        return getTextFromElement(regCompleted);
    }
    public void clickOncontiueButton() {
        clickOnElement(continueBtn);
        log.info("Clicking on continue Btn"+ continueBtn.toString());
    }


}

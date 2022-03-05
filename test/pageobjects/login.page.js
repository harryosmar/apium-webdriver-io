/* global driver */
require('dotenv').config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Onboarding Page
const onboardingButton = $('//*[@text="Lanjut"]');
const skipButton = $('//*[@text="LEWATI"]');
const bannerImage = $('id:la_onboarding');

// Subscription Page
const masukbutton = $('id:tv_login');
const imageSubscription = $('id:iv_thumbnail');
const headTitle = $('id:tv_title');
const buttonSubscription = $('id:btn_apply');

// Login Page
const googleButton = $('id:bt_login_google');
const facebookbutton = $('id:bt_login_facebook');
const emailbutton = $('id:bt_login_email');
const registrasiButton = $('id:tv_daftar_gratis');


// Login Email Page
const titlePage = $('//*[@text="Masuk dengan Email"]');
const emailTextField = $('id:et_email');
const passwordTextField = $('id:et_password');
const loginButton = $('id:bt_login_email');

// Homepage
const coachMarkButton = $('id:bt_skip');
const imageIcon = $('id:iv_logo');
const bannerHomepage = $('id:iv_photo');
const sideBar = $('id:iv_menu');
const searchIcon = $('id:iv_search');

const LoginPage = function loginpage() {
  this.validateOnboardingPage = async () => {
    await expect(onboardingButton).toBeDisplayed();
    await expect(skipButton).toBeDisplayed();
    await expect(bannerImage).toBeDisplayed();
  };

  this.selectSkipbutton = async () => {
    await skipButton.click();
    await driver.setTimeouts(3000); // transition page
  };

  this.validateSubscriptionPage = async () => {
    await masukbutton.waitForExist({ timeout: 10000 });
    await expect(masukbutton).toBeDisplayed();
    await expect(imageSubscription).toBeDisplayed();
    await expect(headTitle).toBeDisplayed();
    await expect(buttonSubscription).toBeDisplayed();
  };

  this.selectLoginPage = async () => {
    await masukbutton.click();
  };

  this.validateLoginPage = async () => {
    await googleButton.waitForExist({ timeout: 10000 });
    await expect(googleButton).toBeDisplayed();
    await expect(facebookbutton).toBeDisplayed();
    await expect(emailbutton).toBeDisplayed();
    await expect(registrasiButton).toBeDisplayed();
  };

  this.loginviaEmail = async () => {
    await emailbutton.click();
  };
  
  this.validateEmailPage = async () => {
    await titlePage.waitForExist({ timeout: 10000 });
    await expect(emailTextField).toBeDisplayed();
    await expect(passwordTextField).toBeDisplayed();
    await expect(loginButton).toBeDisplayed();
  };

  this.setEmail = async () => {
    await emailTextField.setValue(email);
  };

  this.setPassword = async () => {
    await passwordTextField.setValue(password);
  };

  this.submitData = async () => {
    await loginButton.click();
    await driver.setTimeouts(3000);
  };

  this.validateHomePage = async () => {
    if (await coachMarkButton.isExisting()) {
      await coachMarkButton.click();
    }

    await imageIcon.waitForExist({ timeout: 20000 });
    await expect(imageIcon).toBeDisplayed();
    await expect(bannerHomepage).toBeDisplayed();
    await expect(sideBar).toBeDisplayed();
    await expect(searchIcon).toBeDisplayed();
  };

};

module.exports = new LoginPage();

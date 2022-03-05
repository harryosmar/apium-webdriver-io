import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageobjects/login.page';

const message = require('../helper/message');

Given('User on Kompasid onboarding', async () => {
  await loginPage.validateOnboardingPage();
});

When('User skip onboarding', async () => {
  await loginPage.selectSkipbutton();
});

When('Subscription page will have displayed', async () => {
  await loginPage.validateSubscriptionPage();
});

When('User navigate to kompas id login page via onboarding page', async () => {
  await loginPage.selectLoginPage();
  await loginPage.loginviaEmail();
});

Then('User signing in to Kompasid app with registered user', async () => {
  await loginPage.validateEmailPage();
  await loginPage.setEmail();
  await loginPage.setPassword();
  await loginPage.submitData();
});

Then('User on Kompasid homepage', async () => {
  await loginPage.validateHomePage();
});

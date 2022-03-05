@login
Feature: Login Feature

  Scenario: User Successfully Login With Registered Account
    Given User on Kompasid onboarding
    And User skip onboarding
    And Subscription page will have displayed
    And User navigate to kompas id login page via onboarding page
    When User signing in to Kompasid app with registered user
    Then User on Kompasid homepage

Feature: This feature ensure that login functionlity to the quales app works appropraitely.

As a user I want to visit the login page successfully so that I can perform some course management tasks.

Scenario: Verify that the user can login to the app
    Given A user is on the quales landing page
    When A user types in their correct username and password
    Then The user should be logged into the app


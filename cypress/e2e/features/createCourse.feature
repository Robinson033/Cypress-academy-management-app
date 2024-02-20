Feature: This feature ensure that create course functionalities works appropraitely.
As a user i want to access the create course page to enable me to create a course

Scenario: Verify that a user can create a course successfully
    Given A user should access the quales landing page
    When A user should type in their correct credentials to login and create a course 
    Then The user should successfully create a course

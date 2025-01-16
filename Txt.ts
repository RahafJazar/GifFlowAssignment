Git Assignment



Introduction

I developed a simple project for this assignment that uses GitHub and Git to simulate a real development environment. The project consists of a simple text file to illustrates how to use GitFlow. The main goal was gaining a practical understanding of GitFlow and to simulate collaborative development by using two Git terminals representing different team members.

Implementation of GitFlow

Setup and Initialization

1. Repository Initialization: 1 create the project repository manually in GitHub, and an initial file was made in a main branch from server side.

2. Initialize the GitFlow: using git flow init command, I initialize the git flow then by default a develop branch was created from the main branch to serve as the integration

branch for features.

Feature Branch Development

1. User 1 (Terminal 1):

Created a featurel branch.

Implemented a new feature and committed the changes.

Then merged into the develop branch using pull request from user 1 side in

GitHub.

Release Branch

1. User 2 (Terminal 2): Firstly, I pull the work from the server using git pull command to be updated with every change from other collaborators in the repository.

2. Creating the Release Branch: A release branch was created from the develop branch to prepare for the first official release. Final adjustments and updates were made in this branch.

3. Merging the Release: The release branch was merged into the main branch by pull request from user 2 side in GitHub. This branch was also merged back into the develop branch to ensure that develop contained the latest changes

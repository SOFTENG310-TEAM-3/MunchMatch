# Contributing Guidlines-- KTTJXM


Welcome to the KTTJXM contributor guidelines! We're excited to have you here. We appreciate your interest in our project. Below you'll find everything you need to know to contribute to our project. 

## How to file a bug report 
- **Check Existing Issues**: Before filing a bug report, please check our existing issues to see if someone has already reported it.

- **[Create a New Issue](#create-new-issue)**: If the bug hasn't been reported, create a new Issue and discuss with our team member.

- **Provide Details**: Include as much detail as possible, such as the steps to reproduce the bug, expected behaviour, and any relevant screenshots or error messages.

**Great Bug Report** tend to have: 
- A general summary of the problem
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)



## How to Suggest a New Feature
- [Create a New Issue](#create-new-issue): Using the feature template to describe the feature in detail.
- Describe the Feature: Explain what the feature is, why it's needed, and how it should work. If possible, please provide a mock or an example of the feature.

## How to Submit a Pull Request 
We use [Github Flow](https://docs.github.com/en/get-started/quickstart/github-flow) for this project, so all changes would be through pull requests. 
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with a meaningful commit message.
4. Push your branch to your fork.
5. Open a pull request and describe your changes.
6. Await a code review. Respond to comments and make necessary changes.
7. Once approved, the code will be merged into the main branch.

## How to Set Up Your Environment and Run Tests

To start the project:
```
cd munch-match
npm i 
npm start

``` 

To run the tests: 
```
cd munch-match
npm test
```

The ``` cd munch-match``` takes you to the directory so it is not needed if you are already in the munch-match folder.

The ```npm i ``` installs all the dependencies that are needed and only needs to be run once. 

To obtain the Google API Key create a Google developer account and enable the Maps Javascript API and Places API for your Google API key. You can find more information here: https://developers.google.com/maps/documentation/javascript/get-api-key#console

To use the Google API key in the app create an .env file in the munch-match folder and name it ```REACT_APP_GOOGLE_API_KEY``` so it would look like ```REACT_APP_GOOGLE_API_KEY = API_KEY_HERE```


## Types of Contributions
All types of contributions are appreciated:

- Code development.
- Documentation.
- Bug reporting.
- Feature suggestions.

Please note that we do not accept contributions that violate our [code of conduct](CODE_OF_CONDUCT.md). Thanks:)

## Getting Started for Newcomers
- Please check the issues that have already been released and please put your name on the issue that you are working on.
- Please just take one issue at a time.
- If there is any problem that you don't know what to do, please create a new issue and we will discuss it.

## Create New issue
- New issues are for bugs (including documentation issues) or request new features that were not included in the initial list of issues.
- Check existing open issues to avoid duplication.
- Click the issue and use templates for creating issues.
- Add a label to indicate the issue.


## Technical Requirements
- Include Tests: All code changes should include appropriate tests and all tests should pass.
- Using a consistent coding style. Please follow the [Code Style Guidline](https://google.github.io/styleguide/)

## Vision for the project
The main purpose of our project is to aid users who are indecisive about what to eat. We will create a tool that makes it easy for people to find places to eat near them. Our project is called MunchMatch.

MunchMatch is a powerful and user-friendly web application that is designed to assist users in recommending restaurants based on food categories. We aim to enhance the dining experience by personalising restaurant recommendations based on user selections, making the choice of the restaurant more efficient and satisfying.

## Roadmap for the project
Here is a detailed roadmap of features we envisioned to add and in which release:
- Give a few food options from which the user selects their preference (A1)
- Have a “Surprise Me” option (A1)
- Provide a possible list of restaurants obtained from the Google Maps API (A1)
- Explore how to make the information look appealing and clean (A1)
- Ordered by rating (default) (A1) 
- Once the user selects the restaurant, link to Google Maps (A1)
- Explore a way for users to narrow down their choices (A2)
- Explore different ways of randomising and visualising it for the user (A2)
- Reveal the category (A2)
- Implement additional filters (proximity etc.) (A2)
- User profile (A3)
    - History
    - Favourite Categories
- Share the restaurant with friends (A3)
- Cross-platform location sharing between devices (A3)

## High-Level Design / Architecture
In this project, we would use Google API to provide restaurant information like the name, price, and location.

## Project Ground Rules
Code of Conduct: All contributors must follow our code of conduct. Please see detail via [Code of Conduct](CODE_OF_CONDUCT.md)

## Contact us
| Name              | Upi     | Email                     |
|-------------------|---------|---------------------------|
| Tanishq Ranjith   | tnai255 | tran631@aucklanduni.ac.nz |
| Kyle LoweKyle     | klow358 | klow358@aucklanduni.ac.nz |
| Tisha Naicker     | tnai255 | tnai255@aucklanduni.ac.nz |
| James Gai         | jgai284 | jgai284@aucklanduni.ac.nz |
| Manjot Mann       | mman755 | mman755@aucklanduni.ac.nz |
| Xinhuiqiang Xu    | xxu511  | xxu511@aucklanduni.ac.nz  |
| Ben Martin        | bmar268 | bmar268@aucklanduni.ac.nz |
| Devesh Duptala    | ddup656 | ddup656@aucklanduni.ac.nz |
| Jackson Schofield | jsch790 | jsch790@aucklanduni.ac.nz |
| Michael Hardy     | mhar860 | mhar860@aucklanduni.ac.nz |
| Ariel Wang        | wany468 | wany468@aucklanduni.ac.nz |
| Emily Zou         | yzou415 | yzou415@aucklanduni.ac.nz |




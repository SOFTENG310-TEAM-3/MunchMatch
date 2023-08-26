# Contributing Guidlines-- KTTJXM


Welcome to the KTTJXM contributor guidelines! We're excited to have you here. We appreciate your interest in our project. Below you'll find everything you need to know to contribute to our project. 

## How to file a bug report 
- **Check Existing Issues**: Before filing a bug report, please check our existing issues to see if someone has already reported it.

- **[Create a New Issue](#create-new-issue)**: If the bug hasn't been reported, create a new Issue and would be discuss within our team member.

- **Provide Details**: Include as much detail as possible, such as the steps to reproduce the bug, expected behavior, and any relevant screenshots or error messages.

**Great Bug Report** tend to have: 
- A general summary about the probelm
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)



## How to Suggest a New Feature
- [Create a New Issue](#create-new-issue): Using the feature template to describe the feature in detail.
- Describe the Feature: Explain what the feature is, why it's needed, and how it should work. If possible, please provided a mock or an exmaple about the feature.

## How to Submit a Pull Request 
We use [Github Flow](https://docs.github.com/en/get-started/quickstart/github-flow) for this project, so all changes would through pullrequest. 
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

The ```cd munch-match``` takes you to the directory so it is not needed if you are already in the munch-match folder.

The ```npm i ``` installs all the dependencies that are needed and only needs to be run once. 

To obtain the Google API Key create an google developer account and enable the Maps Javascript API and Places API for your google API key. You can find more information here: https://developers.google.com/maps/documentation/javascript/get-api-key#console

To use the Google API key in the app create an .env file in the munch-match folder and name it ```REACT_APP_GOOGLE_API_KEY``` so it would look like ```REACT_APP_GOOGLE_API_KEY = API_KEY_HERE```


## Types of Contributions
All types of contributions are appreciated:

- Code development.
- Documentation.
- Bug reporting.
- Feature suggestions.

Please note that we do not accept contributions that violate our [code of conduct](CODE_OF_CONDUCT.md). Thanks:)

## Getting Started for Newcomers
- Please check the issues that already released and please put your name on with the issue that you are working on.
- Please just take one issue at a time.
- If there is any problem that you don't know what to do, please create a new issue and we would discuss about it.

## Create New issue
- New issues are for bugs (including documentation issues) or request new features that were not includes in initial list of issues.
- Check existing open issues to avoid duplication.
- Click issueand use templates for creating issues.
- Add label to indicate the issue.


## Technical Requirements
- Include Tests: All code changes should include appropriate tests and all test should pass.
- Using a consistent coding style. Please follow the [Code Style Guidline](https://google.github.io/styleguide/)

## High-Level Design / Architecture
In this project, we would use Google API to provide restaurant information like the name, price, location.

## Project Ground Rules
Code of Conduct: All contributors must follow our code of conduct. Please see detail via [Code of Conduct](CODE_OF_CONDUCT.md)

## Contact us
| Name | Upi | Email |
| ------- | ------- | ------- |
|  Tanishq Ranjith  | tnai255    | tran631@aucklanduni.ac.nz    |
|  Kyle LoweKyle  | klow358    | klow358@aucklanduni.ac.nz    |
|  Tisha Naicker  | tnai255    | tnai255@aucklanduni.ac.nz   |
|  James Gai  | jgai284    | jgai284@aucklanduni.ac.nz     |
|  Manjot Mann | mman755    | mman755@aucklanduni.ac.nz     |
| Xinhuiqiang Xu    |xxu511    | xxu511@aucklanduni.ac.nz   |


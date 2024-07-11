---
title: How can I contribute?
---

# How to Contribute

Welcome to the contribution guide for our alt:V documentation site. Whether you're looking to add new content, fix issues, or improve existing documentation, your contributions are highly valued. This guide will help you through the process of contributing effectively.

:::warning
It is mandatory to include your credits on any contribution page to our documentation. For example: **Documentation created by @github_username**.
:::

### Steps to Contribute

-   [[Clone the Repository](#clone-the-repository)] - Clone the repository
-   [[Create a New Branch](#create-a-new-branch)] - Create a new branch for your changes
-   [[Create a content page](#create-a-content-page)] - Create a content page
-   [[Add Your Changes](#add-your-changes)] - Add your changes
-   [[Commit Your Changes](#commit-your-changes)] - Commit your changes
-   [[Push Your Changes](#push-your-changes)] - Push your changes
-   [[Create a Pull Request](#create-a-pull-request)] - Create a pull request

## Clone the Repository

To clone the repository, run the following command in your terminal:

```bash
git clone https://github.com/adriantandara/altv_docs.git
```

## Create a New Branch

To create a new branch for your changes, run the following command in your terminal:

```bash
git checkout -b <branch_name>
```

## Create a content page

:::warning
Don't forget to change the configuration in **.vitepress/config.mts** to add your documentation to the `sidebar` in the desired section.
:::

You must create your own documentation by creating a file with the extension **.md** in one of the folders intended for your documentation. For example: **banPlayerConnect.md** in the **functions** folder.

## Add Your Changes

To add your changes, run the following command in your terminal:

```bash
git add .
```

## Commit Your Changes

To commit your changes, run the following command in your terminal:

```bash
git commit -m "<commit_message>"
```

## Push Your Changes

To push your changes, run the following command in your terminal:

```bash
git push origin <branch_name>
```

## Create a Pull Request

Go to the original repository and create a pull request from your forked repository. Provide a detailed description of your changes and any relevant information.

Review the pull request template for any specific requirements or questions that need to be addressed.

:::warning
Remember, if you don't follow all the steps above to contribute, your pull request will not be accepted.
:::

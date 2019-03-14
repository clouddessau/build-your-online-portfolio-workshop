# Website: Fachpraktikum „Build your Online Portfolio“

## Home

### What will I do in this workshop?

In this workshop, you will create your own online portfolio from scratch in the form of a modern, responsive and fast website.

### What will I learn?

You will gather a basic understanding and knowledge of modern web technologies, such as HTML and CSS, the core of every website. To add content to your portfolio and manage it, you will utilize [Vapid](https://vapid.com), a straightforward and easy-to-use content management system. Additionally, you will get to know [Git](https://git-scm.com), a version control system that can improve your workflow massively.

### Do I need specific skills in advance?

No, the workshop is designed for students who never heard of HTML and CSS before.

### Do I need to prepare something?

To make full use of the four/five workshop days without wasting time to set everything up, we kindly ask you to follow these instructions for setting up your working environment beforehand. If that does not work as expected, we can still help you at the beginning of the workshop.

## Preparation

Before getting into the code, you should think about how your portfolio website should look like. **We recommend you to sketch out the basic layout of your site, to create a so-called wireframe.** Create two sketches for each major page of your website, one for how it should look like on a computer or tablet display and one for how it should look like on a mobile phone with a smaller screen. You will not design a layout for a fixed canvas size like you would do for printed material, but a flexible layout that adapts to any screen size.

Addionally, you will need some tools to create your website. Please follow the instructions and install them beforehand, so that we can get started faster. If you run into problems, tell us on Monday and we will figure it out.

### General

#### Installing Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com) is a code editor that makes it easier to write HTML and CSS code with syntax highlighting and autocompletion. If you already have a code editor installed on your computer (e. g. Atom, Brackets or Sublime Text), you do not need to install Visual Studio Code, though we highly recommend it.

[-> Download  Visual Studio Code](https://code.visualstudio.com)

#### Setting up a GitHub account

[GitHub](https://github.com) is an online platform for hosting open source code/projects, based on the version control system [Git](https://git-scm.com). It is used by thousands of developers worldwide to develop software, including large companies like Amazon, Google, Microsoft, Facebook, IBM and many more. You will use it to work on your portfolio efficiently while learning the Git workflow at the same time that is also becoming more and more popular in the design industry.

[-> Create a GitHub account](https://github.com)

When signing up, you will be asked to choose a plan. The free plan is sufficient. Do not create a new repository yet.

#### Installing GitHub Desktop

Once you created your GitHub account, you can use [GitHub Desktop](https://desktop.github.com) to manage your Git projects on your computer and publish it to GitHub.

[-> Download GitHub Desktop](https://desktop.github.com)

#### Installing Vapid (+ Node.js)

You will use [Vapid](https://vapid.com), a straightforward and easy-to-use content management system, to add content to your portfolio and manage it. To work with Vapid on your computer, you have to install [Node.js](https://nodejs.org) first. Node.js is the framework Vapid runs on.

##### macOS

First, determine if you have the application “Xcode” installed on your computer. If the app is located in the “Applications” folder, skip the first step. If Xcode is not installed, search for the app “Terminal” and open it. Type/Paste the following and hit Enter:

```xcode-select --install```

A dialog will appear, asking if you want to install the command line developer tools. Click on “Install”.

After completing the installation, go back to Terminal, type/paste the following and hit Enter:

```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash```

This will install [nvm](https://github.com/creationix/nvm) (Node Version Manager) that is used to manage different Node.js versions. You will only need one, so type/paste the following and hit Enter when the installation is complete:

```nvm i 8```

This will install version 8 of Node.js. When Terminal tells you that the installation is complete, close the Terminal window and open a new one by choosing “Shell” -> “New Window” from the menu bar. You can now do the final step and install Vapid using [npm](https://npmjs.com) (Node Package Manager) that was installed alongside Node.js. Type/Paste the following and hit Enter:

```npm i -g @vapid/cli```

This process can take a few minutes.

##### Windows

First, download [nvm for Windows](https://github.com/coreybutler/nvm-windows) (Node Version Manager) and install it using the installer.

[-> Download nvm for Windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip)

After completing the installation, search for the app “Command Prompt” (“Eingabeaufforderung” in German) and open it. Type/Paste the following and hit Enter:

```nvm install 8```

This will install version 8 of Node.js. When Command Prompt tells you that the installation is complete, type/paste the following and hit Enter to enable Node.js:

```nvm use 8.15.1```

You can now do the final step and install Vapid using [npm](https://npmjs.com) (Node Package Manager) that was installed alongside Node.js. Type/Paste the following and hit Enter:

```npm i -g @vapid/cli```

This process can take a few minutes.

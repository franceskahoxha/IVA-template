# (your project name)

This is an IVA project, to be built with the [Klick IVA Builder tool](https://github.com/KlickInc/klick-iva-builder).

**NOTE: THIS IS A README TEMPLATE AND SHOULD BE UPDATED WITH SPECIFIC DETAILS FOR THIS PROJECT.**


# Requirements

  - Global install of [Klick IVA Builder tool](https://github.com/KlickInc/klick-iva-builder)
  - Vault credentials for internal deployment and testing
  - Required hardware: iPad (or XCode iOS simulator)
  - `npm` v6.x
  - `node` v10.x


# Installation

  1. Clone this repo.
  2. `$ npm install` to get the common IVA components


# Setup

Ensure the `buildiva` tool has been installed globally. (Follow the instructions in the [Klick IVA Builder repo](https://github.com/KlickInc/klick-iva-builder).)


# Configuration

For Vault deployment, create a `secret.json` file in the root of the repo (the same folder as the `config.presentation.json` file). Alternately, you can create this file in **any parent folder** of this repo. This should be in the same format as needed by SmartRep. e.g.:

```json
{
  "host": "https://vv-agency-klick6.veevavault.com/api/v18.3/",
  "username": "my-vault-user@vv-agency.com",
  "password": "my-vault-password"
}
```

**This file should never be added to the Git repo.** It is explicitly excluded in the `.gitignore` file.


# Build

From anywhere within this repo:

```bash
$ buildiva build
```

This will build the IVA files, take screenshots to generate the `thumb.png` files for each slide, and generate ZIP files necessary for Veeva Vault.


# Deployment

To deploy the presentation to your local Vault instance, from anywhere within this repo:

```bash
$ buildiva deploy
```

You can only deploy after you've already run the `buildiva build` command. This is necessary to generate the required screenshot and package files for deployment.

To see the presentation on the iPad, you'll need to first login to Salesforce, go to CLM Admin and press the Sync button. After that, sync the iPad app to download new/updated slides.


# Getting Started / Contributing 

Use `buildiva watch` to open a live-reload browser instance of the project for development.

Use the `config.hooks.js` file to extend/alter the functionality of the `buildiva` build, screenshotting, packaging and deployment tool.


## QA Supported Devices/Browsers

  | OS | Device | Browser |
  | :- | :----- | :------ |
  | iOS (latest) | iPad Pro | n/a |



# Links / Resources

  - [Current Genome project page @todo](https://genome.klick.com)
  - [QA Test Plan document @todo](#link-to-klick-visible-test-plan-doc)
  - [Klick IVA Builder tool](https://github.com/KlickInc/klick-iva-builder)


# Known Issues / Bugs

  - None at this time

The website production issues tracking sheet can be found [here @todo](#link-to-production-issues-sheet-for-this-website).


# Changelog (example)

  - Feb 2019
    - Added new savings card functionality
  - May 2019
    - Initial build


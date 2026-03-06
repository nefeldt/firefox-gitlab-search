# GitLab Search Extension

A Firefox extension that adds a context menu item to search selected text in your self-hosted GitLab instance.

## Usage

1. Select any text on a webpage
2. Right-click and choose **Search GitLab for "..."**
3. A new tab opens with the GitLab search results

## Setup

1. Open the extension options (click the toolbar icon or go to Add-ons > GitLab Search > Preferences)
2. Enter your GitLab instance URL (e.g. `https://gitlab.example.com`)
3. Click **Save**

## Installation

Load as a temporary extension in Firefox:

1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select the `manifest.json` file from this directory

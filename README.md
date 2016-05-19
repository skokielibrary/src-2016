## Overview

This is the repo for the 2016 Summer Reading / Camp Curiosity landing page. You can view the page at [http://readingclubs.skokielibrary.info](http://readingclubs.skokielibrary.info).

## Setup

To work on this locally, clone the repository and run `npm install`. After that run, 'gulp' to launch Browser Sync and build the page.

## Deploy

It's old fashioned, but effective:

1. Mount the epic/evanced server.
2. Copy the files to the `evanced/sr` directory.

*Note: The `dist` directory assumes that the root is `evanced/sr`.*

## Form template

Due to the requirement this year to have an online submission form for content, we created a custom Django template for the form and confirmation page (template lives with the website repo).

Because the website usess https and Evanced doesn't, we uploaded the css and font files to the static files directory of the website.

<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.shareicon.net/data/2015/08/30/93335_podcast_512x512.png" alt="Project logo"></a>
</p>

<h3 align="center">Podcast Api</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Heckatokronos/LSP/issues)](https://github.com/Heckatokronos/LSP/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Heckatokronos/LSP)](https://github.com/Heckatokronos/LSP/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Prerequisites](#prerequisites)
- [Installing](#Installing)
- [Tests](#tests)
- [Usage](#usage)

## 🧐 About <a name = "about"></a>

That project was created for understanding how api's works, how connect server-side rails to cliend-side application and work them together.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [usage](#usage) for notes on how to use this API.

### Prerequisites

Pretty good if you have a Docker, they will install all packages automatically.

### Installing

First you need to build your container.

You should clone that repo using `git clone` or `gh repo clone` and them build container on your system

```
Docker compose build
```

Create the database, load the schema and initialize all seed data using

```
Docker compose run web bin/rails db:setup
```

And them start the application using:

```
Docker compose up
```

**P.S: If you need to use bash commands (e.g. for using rails commands like `rails routes` or `bundle install`)**

```
Docker compose run web <bash command>
```

## 🔧 Running the tests <a name = "tests"></a>

### Break down into end to end tests

We need to ensure correct functionality, so you can test it by initializing Rspec

```
rspec
```

### And coding style tests

At this moment we're not using any coding style tests.

```
-
```

## 🎈 Usage <a name="usage"></a>

API was created by REST. Check all URI's in application:

```
rails routes
```

They will present you a list of all addresses of applications,
HTTP Versb (**GET POST PATCH PUT DELETE**) and actions in ./app/controllers/api/v1/<controller_name.rb>

You may also for understanding check tests in ./spec/requests

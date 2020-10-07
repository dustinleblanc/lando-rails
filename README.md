# Lando Example Plugin (Replace Me with Your Plugin Name!)

This is an example plugin for Lando to help you start your own.

## Getting Started

List out any prerequisites a user needs for this plugin to function, and give them a general overview of what it does. Are you providing an integration with a hosting provider or some other external service? Does the user need to have some other piece of software installed for your plugin to work? Tell them about it here.

## Tasks

Does your plugin provide and global tasks like `lando order pizza`? Document those tasks here

Example:

### Order

Order food from your favorite service, cuz building websites makes you hungry. You can specify a restaurant with the `--restaurant` flag.

#### Usage
```shell script
# Order a Pizza from the nearest Pizza restaurant on GrubHub
lando order pizza

# Get pizza from a specific restaurant
lando order pizza --restaurant=Dominos

# Set the spiciness level of your curry
lando order "Panang Curry" --restaurant=Tamarind --spicy=5
```

#### Arguments
```shell script
[dish]  The dish you want to order
```

#### Options
```shell script
--restaurant, -r  Specify the restaurant non-interactively
--spiciness, -s   Specify the spiciness of foods from 1-5
```

## Services

List Any services your plugin provides here, things you should document:

### Supported Versions

List out the versions your service supports

### Configuration

Do you expose any configuration for the service?

Example

```yaml
services:
  myservice:
    type: myspecialservice:3.1
    enableUnicorns: true
    config:
      someconfigfile: ./path/to/config/file
```

#### enableUnicorns

Describe what the `enableUnicorns` option does, tell people it is a boolean (true/false)

#### Config Files

Explain what the config files are and if there are any caveats to their use with your container/service.

## Recipes

If your plugin provides recipes, provide details on them here, including a getting started section (pre-requisites, TL;DR get running info), a description of the configuration, the tooling the recipe provides, and any other special activities a user can partake in using your recipe.

### Configuration

List out the configuration, same as services above, but at the recipe level.

### Provided Tooling Commands

Documentation here should be similar to the tasks, but these commands will be specific to the recipe and only load when a user is in a relevant project root.

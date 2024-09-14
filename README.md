# Quotes CLI

A simple command-line tool to get random quotes from a `quotes.json` file. The tool can filter quotes by author, tags, popularity, and category. Install it globally and get inspired by quotes anytime!

## Features

- Get a random quote
- Filter quotes by:
- Author
- Tags
- Popularity
- Category

## Installation

To install, run:

```bash
npm install quotes-cli-garvit-budhiraja
```

To run the project locally:

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Run the tool globally using `npm link`.

```bash
git clone https://github.com/garvit-exe/quotes-cli.git
cd quotes-cli
npm install
npm link
```

## Usage

Once the tool is installed globally, you can use the following commands to get random quotes.

### Get a Random Quote

```bash
quotes-cli quote
```

### Filter by Author

```bash
quotes-cli quote --author "Dr. Seuss"
```

### Filter by Tags

```bash
quotes-cli quote --tags "happiness, life"
```

### Filter by Popularity (minimum value)

```bash
quotes-cli quote --popularity 0.5
```

### Filter by Category

```bash
quotes-cli quote --category "life"
```

## Example

```bash
quotes-cli quote --author "Dr. Seuss" --category "life"
```

Possible Output:

```bash
"They say I'm old-fashioned, and live in the past, but sometimes I think progress progresses too fast!"

 - Dr. Seuss
```

## Contributing

Feel free to fork the project, open issues, or submit pull requests.

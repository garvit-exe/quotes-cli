#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
const inquirer = require("inquirer");

// Read and parse quotes.json
const quotes = JSON.parse(fs.readFileSync(path.join(__dirname, "quotes.json")));

// Function to filter quotes based on user input
function getRandomQuote({ author, tags, popularity, category }) {
  let filteredQuotes = quotes;

  if (author) {
    filteredQuotes = filteredQuotes.filter((q) =>
      q.Author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (tags) {
    const tagArray = tags.split(",");
    filteredQuotes = filteredQuotes.filter((q) =>
      q.Tags.some((tag) => tagArray.includes(tag))
    );
  }

  if (category) {
    filteredQuotes = filteredQuotes.filter(
      (q) => q.Category.toLowerCase() === category.toLowerCase()
    );
  }

  if (popularity) {
    filteredQuotes = filteredQuotes.filter(
      (q) => q.Popularity >= parseFloat(popularity)
    );
  }

  if (filteredQuotes.length === 0) {
    console.log("No quotes found with the given criteria.");
    return;
  }

  const randomQuote =
    filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  console.log(`\n"${randomQuote.Quote}"\n\n - ${randomQuote.Author}`);
}

// CLI tool command setup
yargs.command({
  command: "quote",
  describe: "Get a random quote",
  builder: {
    author: {
      describe: "Filter by author",
      type: "string",
    },
    tags: {
      describe: "Filter by tags (comma-separated)",
      type: "string",
    },
    popularity: {
      describe: "Filter by minimum popularity",
      type: "number",
    },
    category: {
      describe: "Filter by category",
      type: "string",
    },
  },
  handler(argv) {
    getRandomQuote(argv);
  },
});

yargs.parse();

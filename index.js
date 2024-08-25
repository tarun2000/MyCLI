// Import the Command class from the 'commander' package
const { Command } = require("commander");

// Import the 'fs' (file system) module to interact with the file system
const fs = require("fs");

// Create a new instance of the Command class
const program = new Command();

// Set the name, description, and version of the CLI tool
program
  .name("counter") // Set the CLI tool's name to 'counter'
  .description("CLI to some JavaScript utilities") // Set a description for the CLI tool
  .version("0.8.0"); // Set the version of the CLI tool

// Define the 'count' command
program
  .command("count") // Define the command name
  .description("Counts the number of words in a file") // Describe what the command does
  .argument("<file>", "The file to count words") // Specify that the command requires a file as an argument
  .action((file) => {
    // Define the action to be performed when the command is called
    // Read the file asynchronously with UTF-8 encoding
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        // If an error occurs, log it and exit the function
        console.error(err);
        return;
      }
      // Split the file content by spaces to get an array of words
      const words = data.split(" ");
      // Log the number of words to the console
      console.log(words.length);
    });
  });

// Define the 'read_file' command
program
  .command("read_file") // Define the command name
  .description("Reads through the file and prints the contents") // Describe what the command does
  .argument("<file>", "The file to read through") // Specify that the command requires a file as an argument
  .action((file) => {
    // Define the action to be performed when the command is called
    // Read the file asynchronously with UTF-8 encoding
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        // If an error occurs, log it and exit the function
        console.error(err);
        return;
      }
      // Print the file contents to the console
      console.log(data);
    });
  });

// Define the 'read_Line' command
program
  .command("read_Line") // Define the command name
  .description("Counts the number of lines in the file") // Describe what the command does
  .argument("<file>", "The file to read through") // Specify that the command requires a file as an argument
  .action((file) => {
    // Define the action to be performed when the command is called
    // Read the file asynchronously with UTF-8 encoding
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        // If an error occurs, log it and exit the function
        console.error(err);
        return;
      }
      // Split the file content by newline characters to get an array of lines
      const lines = data.split("\n");
      // Log the number of lines to the console
      console.log(lines.length);
    });
  });

// Parse the command-line arguments and execute the corresponding commands
program.parse();

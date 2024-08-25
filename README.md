# MyCLI

Counter CLI Tool
This repository contains a simple Command-Line Interface (CLI) tool built with Node.js, designed to perform basic file operations. The tool is named Counter and provides a set of JavaScript utilities for reading and analyzing text files.

Features
Word Count (count): Counts the number of words in a specified text file.
File Read (read_file): Reads the entire content of a specified text file and prints it to the console.
Line Count (read_Line): Counts the number of lines in a specified text file.
Usage
To use the Counter CLI tool, follow these steps:

## Clone the repository:
git clone https://github.com/tarun2000/MyCLI.git <br/> 
cd MyCLI

## Install the necessary dependencies:
npm install <br/>
Run the CLI tool using the following commands:

### Count Words:
node index.js count <file> <br/>
Replace <file> with the path to the file you want to analyze.

### Read File Content:
node index.js read_file <file> <br/>
Replace <file> with the path to the file you want to read.

### Count Lines:
node index.js read_Line <file> <br/>
Replace <file> with the path to the file you want to analyze.

# Example
node index.js count sample.txt <br/>
This command will count the number of words in sample.txt.

Version
Current version: 0.8.0

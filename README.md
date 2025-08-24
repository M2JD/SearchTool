# SearchTool

A simple and powerful command-line search tool for searching files. It searches recursively through all directories and subdirectories.

## What does this tool do?

This tool searches for specific text in files and shows you:
- The name of the file where the text was found
- The line number where the text was found

## How to use

### Basic Search
```bash
node Search.js --text "search term"
```

### Case-Sensitive Search
```bash
node Search.js --text "SearchTerm" --case-sensitive
```

### Regular Expression Search
```bash
node Search.js --text "pattern.*" --regex
```

### Search in specific file type
```bash
node Search.js --text "function" --file-type ".js"
```

### Combine multiple options
```bash
node Search.js --text "error" --file-type ".log" --case-sensitive --regex
```

## Available Options

| Option | Shortcut | Description |
|--------|----------|-------------|
| `--text` | `-t` | Text to search for (required) |
| `--case-sensitive` | `-c` | Case-sensitive search |
| `--regex` | `-r` | Use regular expressions |
| `--file-type` | `-f` | File type to search in (default: .txt) |

## Practical Examples

### Example 1: Search for "function" in JavaScript files
```bash
node Search.js --text "function" --file-type ".js"
```

### Example 2: Search for error messages
```bash
node Search.js --text "error" --file-type ".log"
```

### Example 3: Search for email addresses
```bash
node Search.js --text "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" --regex --file-type ".txt"
```

### Example 4: Search for specific variable with case sensitivity
```bash
node Search.js --text "userName" --case-sensitive --file-type ".js"
```

## Output Format

The tool displays results in this format:
```
./src/main.js:15
./src/utils.js:42
./docs/README.txt:8
```

Where:
- `./src/main.js` = file path
- `:15` = line number

## When to use this tool?

- **Code Review**: Search for a specific function or variable
- **Debugging**: Search for error messages in log files
- **Documentation**: Search through documentation files
- **Configuration**: Search for specific settings in config files

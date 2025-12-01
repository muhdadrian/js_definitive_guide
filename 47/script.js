// Template Literals

// The following template literal includes four JS expressions, a Unicode escape sequence, and at least four newlines (the expressions values may include newlines as well):

let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

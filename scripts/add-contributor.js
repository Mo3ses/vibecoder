#!/usr/bin/env node
/*
 * Adds a GitHub username to contributors.js, unless it is already there or
 * belongs to a bot.
 *
 *   node scripts/add-contributor.js <github-username>
 *
 * Run automatically by .github/workflows/bump-version.yml with the author of
 * every merged pull request. You don't need to run it by hand.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "contributors.js");
// GitHub usernames: letters, digits and single hyphens, up to 39 characters.
const VALID_LOGIN = /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;

function main() {
  const login = (process.argv[2] || "").trim();
  if (!login) throw new Error("Pass the GitHub username, like: node scripts/add-contributor.js octocat");
  if (/\[bot\]$/.test(login)) { console.log("Skipped " + login + ": bots aren't listed."); return; }
  if (!VALID_LOGIN.test(login)) throw new Error('"' + login + '" is not a valid GitHub username.');

  const text = fs.readFileSync(FILE, "utf8");
  const match = text.match(/window\.CONTRIBUTORS = (\[[\s\S]*?\]);/);
  if (!match) throw new Error("contributors.js no longer contains window.CONTRIBUTORS = [...];");
  const list = JSON.parse(match[1]);

  if (list.some(name => name.toLowerCase() === login.toLowerCase())) {
    console.log(login + " is already listed.");
    return;
  }
  list.push(login);
  const json = "[\n" + list.map(name => "  " + JSON.stringify(name)).join(",\n") + "\n]";
  fs.writeFileSync(FILE, text.replace(match[0], "window.CONTRIBUTORS = " + json + ";"));
  console.log("Added " + login + ".");
}

try {
  main();
} catch (error) {
  console.error("Adding the contributor failed: " + error.message);
  process.exit(1);
}

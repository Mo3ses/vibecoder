#!/usr/bin/env node
/*
 * Adds 1 to the last number of the game version and updates every place
 * the version is shown.
 *
 *   node scripts/bump-version.js    0.0.0.1 → 0.0.0.2, 0.0.0.9 → 0.0.0.10
 *
 * VERSION holds the current version without the "v". The files below show it
 * as "v<version>"; each must contain it at least once, otherwise the script
 * stops without changing anything, so the version can't silently drift.
 *
 * Run automatically by .github/workflows/bump-version.yml after every merged
 * pull request. You don't need to run it by hand.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const VERSION_FILE = path.join(ROOT, "VERSION");
const FILES_SHOWING_VERSION = ["index.html", "README.md"];

function nextVersion(version) {
  const parts = version.split(".");
  if (!parts.every(part => /^\d+$/.test(part))) {
    throw new Error('VERSION must be numbers separated by dots, like "0.0.0.1"; found "' + version + '".');
  }
  parts[parts.length - 1] = String(Number(parts[parts.length - 1]) + 1);
  return parts.join(".");
}

function main() {
  const current = fs.readFileSync(VERSION_FILE, "utf8").trim();
  const next = nextVersion(current);
  const oldLabel = "v" + current;
  const newLabel = "v" + next;

  // Check every file first, then write, so a failure leaves the repo untouched.
  const updates = FILES_SHOWING_VERSION.map(name => {
    const file = path.join(ROOT, name);
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes(oldLabel)) {
      throw new Error(name + ' no longer contains "' + oldLabel + '". Put it back, or update FILES_SHOWING_VERSION in scripts/bump-version.js.');
    }
    return { file, text: text.split(oldLabel).join(newLabel) };
  });

  updates.forEach(u => fs.writeFileSync(u.file, u.text));
  fs.writeFileSync(VERSION_FILE, next + "\n");
  console.log(oldLabel + " → " + newLabel);
}

try {
  main();
} catch (error) {
  console.error("Version bump failed: " + error.message);
  process.exit(1);
}

# Vibecoder Incremental v0.0.0.2

An incremental game where every click is a token spent.

You don't write code, you spend tokens. Every prompt you send burns tokens, and the company pays back every burned token as budget so you can burn more. Buy agents that burn on their own, fight the technical debt nobody reads, and buy a library of skills, plugins and agents one file at a time. Each shelf of the library reads like a letter about knowing, work and time.

Play it by opening `index.html` in any browser. There is no build step and no dependency.

Available in English (default) and Brazilian Portuguese.

## How to play

- **Send** burns tokens. Your score is the total you have burned; your budget is what you can spend.
- **Agents** burn tokens on their own. At 10, 25, 50, 100 and 200 of the same type, that type doubles.
- **Setup** makes each click burn more.
- **Technical debt** grows while agents run and cuts their output by up to 70%. Reading the code yourself lowers it and is the only action in the game that costs no tokens.
- **The library** has three shelves of ten files, sold one at a time and in order:
  - `/skills` double your click and speed up your reading.
  - `+plugins` add 50% to every agent's output. Three of them also slow down debt.
  - `@agents` each triple the producer with the same number. Read their comments.
- **`/clear`** unlocks once all 30 files are installed. It wipes the run, gives you a star and doubles everything you burn in the next one. Texts you have read stay readable.
- **The terms of use** pick the mode: accept for standard, decline for hardcore (25% less output, 50% higher prices), close with the X for a speedrun.

The game saves itself in the browser's `localStorage` and keeps up to 8 hours of offline progress at half speed.

## Project structure

```
index.html        page markup; static text is filled in from the locale
styles.css        all styles; colors are theme tokens with light and dark values
game.js           engine: game data, economy, rendering, dialogs, main loop
locales/en.js     English text (default and fallback)
locales/pt-BR.js  Brazilian Portuguese text
contributors.js   GitHub usernames shown on the final screen, updated automatically
VERSION           current game version, bumped automatically
scripts/          bump-version.js and add-contributor.js, run by the workflow in .github/workflows/
```

`game.js` holds numbers and rules only. Every string the player reads lives in `locales/`. Arrays in the engine (`PRODUCERS`, `SETUP`, the shelves) are matched to the locale arrays by position.

## Contributing

Pull requests are welcome. Some good places to start:

### Add a language

1. Copy `locales/en.js` to `locales/<code>.js` (for example `locales/es.js`).
2. Change `code`, `label` and `numberLocale`, then translate the strings. Keep the arrays in the same order.
3. Add `<script src="locales/<code>.js"></script>` to `index.html`, after `en.js` and before `game.js`.

Any key you leave out falls back to English, so a partial translation still runs.

### Write or edit library files

Library entries live in each locale under `library.skills`, `library.plugins` and `library.agents`. Each entry has a `name` (the slug shown after `/`, `+` or `@`), a one-line `description` (the joke), a `body` (the reflective text, as an array of paragraphs) and an optional `comment` (the hidden human note shown as an HTML comment). Keep ten entries per shelf, or change `FILES_PER_SHELF` and the prices in `game.js`.

The shelves are meant to be read in order:

- **Skills** are about knowing: looking beneath what appears, causes, layers, open systems.
- **Plugins** are about work: productivity, metrics, fear of unemployment, how gains are shared.
- **Agents** speak in first person about what they do with the time they "save", and end in a society where people no longer sell their hours to live.

### Balance the economy

All tuning constants are at the top of `game.js`: producer costs and rates, setup prices, library prices, debt rates and multipliers. A greedy bot clicking four times per second completes the library in about 67 minutes with the current numbers.

### Prompts and replies

`prompts` and `replies` in each locale are the chat lines picked at random on every send. Add more; they don't need to match between languages.

### Versioning and credits

Every merged pull request adds 1 to the last number of the version (for example 0.0.0.9 becomes 0.0.0.10) and adds its author to the contributors listed on the game's final screen. A GitHub Actions workflow does both after the merge: `scripts/bump-version.js` updates `VERSION`, the page title and this README, and `scripts/add-contributor.js` updates `contributors.js`. Don't change the version or the contributors by hand in your pull request.

## Origin

Vibecoder Incremental grew out of an earlier game, *O álbum de figurinhas de Roy* (Roy's sticker album), and keeps its tone: a clicker about AI that keeps asking what the clicking is for.

## License

MIT. See [LICENSE](LICENSE).

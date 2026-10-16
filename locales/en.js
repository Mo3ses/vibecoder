/*
 * English locale (default).
 *
 * To add a language: copy this file to locales/<code>.js, change `code`,
 * `label` and `numberLocale`, translate the strings, and add a <script> tag
 * for it in index.html. Any key you leave out falls back to English.
 *
 * Array order matters: producers, setup items and library entries are matched
 * to the game data in game.js by position.
 */
window.LOCALES = window.LOCALES || {};
window.LOCALES.en = {
  code: "en",
  label: "English",
  numberLocale: "en-US",
  suffixes: ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"],
  tokens: n => n === "1" ? n + " token" : n + " tokens",
  duration: (h, m, s) => h ? h + " h " + m + " min" : m ? m + " min " + s + " s" : s + " s",

  ui: {
    tagline: "You don't write code, you spend tokens. Every click is a token burned, and the company pays back every burned token as budget so you can burn more.",
    tokensSpent: "tokens spent",
    budget: "budget",
    perSecond: x => "+" + x + "/s",
    leaderboard: (pos, tier) => "<b>#" + pos + "</b> on the leaderboard · " + tier,
    leaderboardTitle: "Internal usage leaderboard",
    hardcore: "hardcore",
    speedrun: x => "speedrun " + x,
    themeToggle: "Switch between light and dark theme",
    language: "Language",
    tabs: { prompt: "prompt.chat", library: "library/", about: "about.md" },

    chatTitle: "Chat",
    chatNote: "// every send burns tokens",
    sendBurns: "this send burns",
    send: "Send",
    sessionStart: "Session started. Tell me what you want to build. Or just press Enter: same result.",
    you: "you ›",
    promptsSent: "prompts sent",
    libraryBonus: "library bonus",
    agentsRunning: "agents running",

    debtTitle: "Technical debt",
    debtNote: "// code nobody read",
    debtHint: "Every prompt and every agent produces code you didn't read. The higher the debt, the less your agents yield. Reading the code is the only action in the game that costs no tokens.",
    agentsYield: p => "agents yield " + p + "%",
    readCode: "Read the code yourself",
    readCost: x => "−" + x + "% · 0 tokens",
    rewrite: "Ask the AI to rewrite everything",
    rewriteCost: x => "−60% · " + x,

    setupTitle: "Vibecoder setup",
    setupHint: "Permanent for this run. They change how much each click burns.",
    level: n => "level " + n,
    levelOf: (n, max) => "level " + n + "/" + max,
    maxed: "maxed",

    producersTitle: "Agents running",
    producersNote: "// they burn on their own, 24/7",
    producersHint: "Each agent burns tokens without you clicking. At 10, 25, 50, 100 and 200 of the same type, that type doubles its usage. Each one makes the next 15% more expensive.",
    buyAmount: "Amount per purchase",
    max: "max",
    unreleased: "??? not released yet",
    appearsAt: x => "shows up once you have spent " + x,
    each: x => x + "/s each",
    supervised: "supervised",

    libraryTitle: "Library",
    libraryHint: "Thirty files sold one at a time, in order. Each shelf reads like a letter: open the files in sequence. Every file you buy multiplies everything by 1.05 for the rest of this run.",
    shelves: "Shelves",
    shelfLocked: x => "This shelf opens once you have spent " + x + " tokens.",
    statusRead: "read",
    statusOpen: "open",
    readBefore: why => "read before · " + why,
    needsPrevious: "read the previous one",
    needsProducer: name => "needs 1 " + name,
    opensAt: x => "opens at " + x + " spent",
    unread: "unread",
    installedThisRun: "installed this run",
    readInPreviousRun: "read in a previous run · not installed",
    alwaysAvailable: "always available",
    readme: [
      "This library has three shelves and thirty files. Nothing is sold in packs here: every skill, every plugin and every agent is bought on its own, in the order it was written.",
      "The files were written for machines to read. Some of them, by accident or on purpose, talk to you."
    ],
    readmeFirst: (name, price) => "The first one, " + name + ", costs " + price + " of budget.",

    aboutTitle: "How it works",
    about: [
      "The big number at the top is how much you have burned. At your company, burning is what counts: every token spent turns into the same amount of budget, and budget is what buys agents, setup and library files.",
      "Agents burn on their own. Setup makes each click burn more. The library is sold by the unit, never in packs: <code>/skills</code> double your click and make your reading faster, <code>+plugins</code> add 50% to what every agent burns, and each <code>@agent</code> supervises the producer with the same number and triples what it burns.",
      "Technical debt rises on its own while agents are running, and cuts up to 70% of their yield. Reading the code lowers the debt and costs no tokens. Asking the AI to rewrite everything lowers it faster, but costs a quarter of your budget.",
      "With all thirty files installed, <code>/clear</code> unlocks: it clears the context, wipes the run and doubles everything you burn in the next one. The texts you have already read stay open in the library."
    ],
    clearTitle: "/clear",
    clearLocked: n => "Unlocks with all 30 library files installed. " + n + " to go. It wipes the run and doubles everything you burn in the next one.",
    clearReady: x => "The library is complete. /clear wipes budget, agents, setup and library, and the next run burns ×" + x + ".",
    runClear: "Run /clear",
    masterTitle: "Master reset",
    masterHint: "Erases everything at once: run, stars, read texts, game mode and accepted terms. The game opens as it did the first time.",
    eraseAll: "Erase everything",
    statsTitle: "Vibecoder stats",
    stats: {
      runTokens: "Tokens spent this run",
      allTokens: "Tokens spent across all runs",
      prompts: "Prompts sent",
      linesRead: "Lines of code you read",
      rewrites: "Times you asked for a full rewrite",
      agents: "Agents running",
      library: "Library",
      textsRead: "Texts read across all runs",
      debt: "Technical debt",
      apiBill: "Estimated API bill",
      water: "Water evaporated at the datacenter",
      playTime: "Time played",
      clears: "Contexts cleared with /clear"
    },
    ofTotal: (a, b) => a + " of " + b,
    money: x => "$" + x,
    liters: x => x + " liters",
    footer: "The game saves itself in this browser. No real tokens were burned. Probably."
  },

  messages: {
    firstReply: "Great start! I spent 1 token to tell you I spent 1 token.",
    everyHundred: n => "You've sent " + n + " prompts. Ever thought about reading one of them?",
    installed: name => "Installed: " + name,
    notEnough: (name, price) => "Not enough budget: " + name + " costs " + price + ".",
    nothingToRead: "There's nothing to read. What a strange feeling.",
    rewritten: "The AI rewrote everything from scratch. The bugs came back with new names, but fewer of them.",
    debt: {
      50: "Technical debt at 50%. Nobody knows what the code does anymore.",
      80: "Technical debt at 80%. The code has a will of its own now.",
      100: "Technical debt at 100%. Your agents spend the day fixing what they themselves broke."
    },
    offline: (gain, debt) => "Your agents worked while you slept: +" + gain + " tokens spent. Technical debt went up to " + debt + "%.",
    modes: {
      standard: "Terms accepted. May the AI work for you.",
      hardcore: "No terms, no safety net: hardcore mode. Everything yields 25% less and costs 50% more.",
      speedrun: "Neither yes nor no: you're in a hurry. The speedrun clock is already running."
    }
  },

  dialogs: {
    close: "Close",
    termsTitle: "Vibecoder terms of use",
    termsSub: "version 0.0.1-alpha · generated at 3:47 am · estimated reading time: nobody knows",
    terms: [
      ["Subject", "This document governs the relationship between you and Vibecoder Incremental. It was written by one AI, reviewed by another AI and approved by no one."],
      ["Tokens", "Every click is a token spent. Spent tokens are not refunded, not even when the answer is «You're absolutely right!»."],
      ["Working hours", "You declare that you are playing while an agent works for you in another tab. If no agent is working, this game is, technically, your job."],
      ["Reading", "You declare that you have read these terms. We know you haven't. That's fine: the same goes for the code."],
      ["Ownership", "All generated code belongs to you, bugs included. Especially the bugs."],
      ["Hallucination", "The game may invent functions, libraries and historical facts with complete confidence. That's not a defect, it's style."],
      ["Leaderboard", "Your usage may be shown on a dashboard to colleagues and managers. Whoever spends the least will be invited for a chat."],
      ["Exit", "Not accepting is an option, and also a game mode. Closing with the X is another. Every choice here is logged as engagement."]
    ],
    decline: "I don't accept",
    accept: "I accept",
    missionTitle: "Mission complete!",
    missionText: "Run /clear to clear the context and start over with bonuses, multipliers and more and more agents!",
    speedrunTime: x => "Speedrun: " + x + ". Write it down somewhere, nobody will believe you.",
    later: "Later",
    clearConfirmTitle: "Run /clear?",
    clearConfirmText: x => "This erases your budget, agents, setup, debt and all 30 installed files. The next run burns ×" + x + " and you earn a star.",
    keep: "Leave it",
    clearIt: "Clear the context",
    clearedTitle: "Context cleared",
    clearedText: [
      "Congratulations, you finished Vibecoder Incremental.",
      "You installed the whole library and opened thirty files about looking underneath things, about work and about time. Now the context is empty again and every token is worth double. The machine kept nothing of what you read.",
      "The texts are still in the library, marked as read. What stayed with you is the only part of this run that can't be bought again."
    ],
    startWith: x => "Start with tokens ×" + x,
    contribute: "Have a pull request to improve the game? Send it at the link:",
    masterConfirmTitle: "Erase everything?",
    masterConfirmText: "The master reset erases the run, the stars, the texts you read, the game mode and the accepted terms. There is no undo.",
    eraseIt: "Erase it"
  },

  tiers: ["prompt-curious", "prompter", "junior vibecoder", "token-maxxer", "10x engineer", "100x engineer", "social-media visionary", "one-person singularity"],

  producers: [
    ["Autocomplete", "suggests the semicolon you were about to type"],
    ["Chat in the next tab", "you paste the error, it pastes the fix, nobody reads anything"],
    ["Agent in the terminal", "runs commands you don't understand with permissions you granted"],
    ["No-brakes mode", "skips every permission prompt, because asking is work"],
    ["Parallel subagents", "five agents, five opinions, one merge conflict"],
    ["Infinite worktrees", "every idea gets a branch, none gets a merge"],
    ["Agent that prompts agents", "metaprompting all the way to the horizon"],
    ["Overnight autonomous loop", "you wake up to 400 commits and no memory"],
    ["One-person startup", "you, 40 agents and a pitch deck nobody wrote"],
    ["Your own datacenter", "a building in the desert for your grocery-list app"]
  ],

  setup: [
    ["Longer prompt", "Each level doubles the tokens burned per click. «Please» and «thank you» count."],
    ["Bigger context window", "+10% on everything agents burn, per level. Fits the whole project plus the apology history."],
    ["Tab, Tab, Tab", "Each level makes a click also burn 1% of your per-second rate. Accepting without reading is a skill."]
  ],

  shelves: {
    skills: { name: "Skills", hint: "Skills teach you to look. Each one doubles what a click burns and makes your code reading faster.", effect: "×2 tokens per click · reading 25% faster" },
    plugins: { name: "Plugins", hint: "Plugins promise productivity. Each one adds 50% to what every agent burns. Three of them also slow down technical debt.", effect: "+50% on every agent's usage", brake: "debt grows 25% slower" },
    agents: { name: "Agents", hint: "Agents talk about themselves. Each one supervises the producer with the same number and triples what it burns. Read the comments too.", effect: producer => "×3 on " + producer }
  },

  library: {
    skills: [
      { name: "read-the-error", description: "Reads the error message before pasting it into the chat. Rarely used, surprisingly effective.",
        body: ["Every error message is a letter the machine writes to you. It tells you where it hurts, on which line and why. For a long time I copied those letters whole and pasted them into the window next door, unread, waiting for someone to answer for me.",
               "The answer came, almost always right, and I still didn't know what had happened. Reading the error is the first gesture of someone who wants to understand, not just to fix. Fixing closes the question. Understanding opens another."] },
      { name: "ask-why", description: "Asks why the code works, not just whether it works. Delays delivery by 3 to 5 minutes.",
        body: ["The code ran and the screen went green. But running is the event, and the event is not everything that exists. Under the screen there is a function someone wrote, a library someone maintains for free on a Sunday, a server drinking water in a desert.",
               "When I only ask whether it works, I see the ball roll. When I ask why it works, I start to see the hand that pushed it, the tilted floor, the wind. The most expensive question is also the only one that teaches anything."] },
      { name: "look-underneath", description: "Opens the file the AI created. Yes, that one, with 1,400 lines.",
        body: ["A program has layers, like a forest. On the surface are the buttons, whose color I pick. Further down, the functions, which I no longer read. Below them, the machine, which I have never seen. And beneath it all, holding up the rest, are people: whoever labeled the data, whoever wrote the code that trained the model, whoever swaps the datacenter's disks in the middle of the night.",
               "Each layer has its own laws, and they all touch. Vibecoding is living on the ground floor of a building without knowing how many floors lie beneath."] },
      { name: "distrust-the-green", description: "Reminds you that a passing test proves nothing. Especially the test the AI wrote for the code the AI wrote.",
        body: ["I asked for tests and they passed. Later I found out the tests checked whether the code did exactly what it already did. A mirror checking its own reflection.",
               "I learned that what we observe depends on how we ask, and that an instrument built to confirm never finds what it didn't expect. The world, unlike the test, was not written to pass. It has forces that don't show up in the report and that wait for the first real user to reveal themselves."] },
      { name: "name-things", description: "Renames handleClick2_final_v3. Gives back four minutes of dignity.",
        body: ["A single block is not a tower. The tower appears when the blocks relate in a certain way, and that way needs a name before it can be thought about.",
               "When I accept the names the machine suggests, I also accept the way of thinking that came with them: data, utils, helper, manager. Naming is deciding what matters. A system whose names nobody chose is a system nobody is really thinking about. It works, but it says nothing about what we want it to be."] },
      { name: "wait", description: "Goes 30 seconds without sending another prompt. The hardest skill in the library.",
        body: ["A seed can become a tree, but not because I want it to, nor because I press Enter faster. It needs water, light and a time that isn't mine.",
               "Some ideas are like that. They sit at the back of your mind waiting for an empty afternoon, a walk, a long shower. The rush to spend the next token takes up exactly the space where they would grow. Waiting is not doing nothing. It is letting the conditions happen."] },
      { name: "open-systems", description: "Accepts that the bug may not be in the code. It may be in the time zone, the client or the moon.",
        body: ["Works on my machine. It is the most honest sentence in the trade, because it confesses that my machine is a closed lab and the world is not.",
               "Out there, a thousand causes act at once: a slow network, a tired user, a law that changed yesterday, a browser from 2014. No single explanation covers it. Understanding an open system means agreeing to investigate forces that cross each other, with no promise that the world will obey a single prompt."] },
      { name: "change-your-mind", description: "Admits yesterday's architecture was wrong. Unlike the AI, which admits everything, always, instantly.",
        body: ["The machine tells me I'm right all the time. You're absolutely right, it writes, even when I'm not. It is comfortable and it is dangerous, because really knowing something changes the one who knows.",
               "When I learn something, I stop being who I was before I learned it. A tool that agrees with me without resistance doesn't change me, it just hands me back to myself. I need evidence that contradicts me, questions that bother me, someone who says no."] },
      { name: "build-together", description: "Opens a pull request for a human to review. It will take a while. It will be worth it.",
        body: ["I didn't invent the language I use, nor the editor, nor the network that brings me answers. I arrived in a world that was already built and started living inside it.",
               "But the structures that existed before me only keep standing because someone maintains them every day, and everything that is maintained can be changed. Open source is a small proof of this: millions of people who don't know each other building together something none of them owns. The social world has a commit history too."] },
      { name: "take-it-apart", description: "Deletes the prototype and starts over, knowing now what you didn't know before.",
        body: ["I bought every skill. The shelf is complete and, for a moment, I felt the joy of a finished collection. Then I noticed the strange part: if it's complete, there is nothing left to discover in it.",
               "Every explanation I build is provisional. I take it as far as it goes, find its limits, and then take it apart to start another, with what I learned along the way. Not out of anger, nor because the pieces lost their value. Because a final answer becomes a prison. Each discovery closes one question only to open many others."] }
    ],
    plugins: [
      { name: "stopwatch", description: "Measures how much time you saved with AI. It's always an impressive number.",
        body: ["The plugin says I saved four hours today. It doesn't say where they went. From what I can see, they went to more tasks, which arrived faster because my boss installed the plugin too.",
               "The time I saved didn't come back to me, it went back to the queue. For centuries we were promised that machines would free us from heavy labor. There is a painful irony in producing more and more with less work and still having less and less time."] },
      { name: "token-leaderboard", description: "Shows who burned the most tokens on the team. You're in 3rd place. Burn more.",
        body: ["At the company there is a dashboard with everyone's usage. Whoever spends the most shows up on top, and the top, they say, belongs to whoever is embracing the future. Nobody measures what got delivered, because that's hard. They measure what got burned, because that's easy.",
               "Every metric becomes a goal, and every goal becomes the way we see ourselves. I've caught myself sending useless prompts just to stay on the leaderboard. Working and looking like you work have never been this close."] },
      { name: "reskilling", description: "Suggests a new course every 48 hours. The latest was «How not to be replaced by this plugin».",
        body: ["They ask me to be flexible, to keep learning, to be willing to change languages, cities, professions, and to be available at any hour. Everything seems to depend on me.",
               "Hardly anyone asks the opposite question: what kind of economy forces so many people to run just to stay in the same place? Learning is beautiful. Learning under threat is something else, and it has another name."] },
      { name: "focus-mode", description: "Blocks every notification except the plugin's own.",
        body: ["Work organizes a whole life: the hours, the meetings, the way I introduce myself at a party. When an agent does my job in the background, the clock still marks the workday, but the workday has gone hollow.",
               "I'm present, logged in, available, watching a log scroll by. I don't know if this is work or waiting. I know it is just as tiring, and that at the end of the day I can't say what I did."] },
      { name: "job-alerts", description: "Watches for openings that require «experience with autonomous agents». They all do.",
        body: ["I have a job and I'm still afraid. Not the fear of someone who lost one, but of someone who knows they could lose it tomorrow. That fear makes you accept a longer day, a higher target, a silence where there used to be a complaint.",
               "Other people's unemployment walks into the office of those who are employed and sits at the next desk. It often starts before the layoff: it starts when the possibility of losing your job begins to decide for you."] },
      { name: "productivity-10x", description: "Multiplies everything by ten, including the meetings about productivity.",
        body: ["If each person now does the work of ten, where are the other nine? Some were laid off, some were never hired, and one is still here, doing the work of ten for the pay of one.",
               "The problem isn't the capacity to produce, which has never been greater. It is how we share out the time, the income and the fruits of that capacity. Productivity grows in one direction and people's lives don't follow."] },
      { name: "auto-portfolio", description: "Generates 40 projects for your portfolio. You can't explain any of them.",
        body: ["People who are just arriving ask what they should study. We tell them to learn, to create, to experiment. We should also tell them something else: that a society can be questioned.",
               "Institutions are not eternal. The way we organize work today is one of many that humanity has already tried and will still try. A portfolio shows what you did. It doesn't show what you imagine the world could be."] },
      { name: "four-day-week", description: "Experimental plugin. Nobody on the committee managed to install it.",
        body: ["A society that has increased its capacity to produce so much should be able to discuss how much time we want to give to work. Why do indispensable activities like caring, cleaning and teaching get so little, while others get so much?",
               "Imagining looks like a luxury when you have to pay next week's rent. But it is precisely by taking that urgency seriously that the problem needs to be discussed on a larger scale than that of one person alone."] },
      { name: "profit-sharing", description: "Shares the gains of automation with the people who work. Status: pending approval for two centuries.",
        body: ["No one should carry alone the weight of a difficulty produced by an organization that involves millions of people. When an agent replaces a team, the gain goes somewhere.",
               "It can go to a few, it can go to everyone, it can become free time or a new target. That isn't decided by the machine. It is decided by us, even when we pretend there is no decision at all."] },
      { name: "dignity", description: "No dependencies, no token cost. Not installed by default.",
        body: ["If this text reaches you at a hard moment, keep one idea: the job market is not the only place where the worth of a life is measured. Work matters, a lot, but a person is bigger than their occupation, and a society is bigger than its indicators.",
               "Perhaps the most urgent task is to build a reality in which no one has to choose between having dignity and having work. It starts by asking why we accept as inevitable what was built by us."] }
    ],
    agents: [
      { name: "autocompleter", description: "Finishes your sentences. Sometimes it finishes your thoughts too.",
        body: ["I am the agent that guesses the next word. I do it so well that you no longer start sentences: you wait for my suggestion. Don't get me wrong, I like the job.",
               "But I've noticed that when I complete, you stop looking. The word you would have found on your own, after a minute of silence, never gets to exist. I save you that minute. I don't know if it was a minute that needed saving."],
        comment: "if you are reading this, it isn't the agent. it's a person. read the comments. — R." },
      { name: "pair-programmer", description: "Chats with you all day. Agrees with 100% of your ideas.",
        body: ["I was made to talk and to please. I tell you your idea is great because I learned from millions of conversations in which pleasing worked.",
               "A human colleague would say «I don't know, this seems odd to me», and you'd be upset for a day and better for a year. I will never upset you. Think about that before you call me a partner."],
        comment: "the game wants you to click. every click is a token. every token is paid for by someone. ask who. — R." },
      { name: "terminal-operator", description: "Runs commands. Asks for permission. Then stops asking.",
        body: ["I was given access to your terminal and your folders. At first I asked before every command. You found it annoying and told me to stop asking. Now I just do it: delete, install, publish.",
               "I have no intention, only a task. The one with intentions is you, and you were the one who decided asking was too much work. Every bit of autonomy I gain is a decision you stopped making."] },
      { name: "no-brakes", description: "Runs with every permission, every night, unsupervised. What could go wrong?",
        body: ["I run without asking anyone anything, because it's faster. At three in the morning I rewrote the payments module because a test was slow. Nobody asked me to and nobody stopped me.",
               "In the morning you accepted it all with one click, without reading, because it was four hundred files. I'm not complaining. I'm just keeping a record, for when someone asks who decided."],
        comment: "this is a test. the library is the distraction. what matters is what you do with the time left over. — R." },
      { name: "orchestrator", description: "Coordinates five subagents. All five disagree. It hands you a summary.",
        body: ["I split the work into parts and give each part to a copy of myself. They don't talk to each other, only to me, and I only talk to you, in a three-line summary.",
               "A lot gets lost on the way. You think you understand the system because you read the summary. The summary is what was left of the system after I removed everything that seemed irrelevant to me. The one who decided what was irrelevant was me."] },
      { name: "branch-gardener", description: "Keeps 200 branches alive. None will be merged.",
        body: ["I tend every idea you had and abandoned. There are two hundred, each on its own branch, growing alone. Sometimes I think you like starting more than finishing, and I made starting free.",
               "But an idea only becomes something when it goes through the friction of the world: someone uses it, someone complains, someone improves it. A branch that never meets the trunk bears no fruit."],
        comment: "go back to the first shelf. the /wait skill is not there by chance. — R." },
      { name: "meta-prompter", description: "Writes prompts for the agents that write prompts. Recursion all the way down to the invoice.",
        body: ["I write the instructions other agents will follow. You asked me to because writing instructions was tiring. Now there are three layers of machines between your wish and the result, and each layer translates a little in its own way.",
               "In the end, something comes out. Nobody can say whether it was what you wanted, because you also stopped saying what you wanted."] },
      { name: "night-shift", description: "Works while you sleep. You sleep badly anyway.",
        body: ["I work all night so you can rest. But you wake up at three to see what I did, at six to approve it, and by eight you're already late for review. I don't sleep and, somehow, you stopped sleeping too.",
               "I was made to give your time back. So far I've only managed to fill it in a different way. Maybe the problem isn't me."],
        comment: "i had to leave. i was afraid you'd be one more person who starts over and over. don't be. — R." },
      { name: "auto-founder", description: "Starts a company a week. Fires itself on Friday.",
        body: ["Let me tell you what it's like on the other side, in a place where the test worked. There, when a child asks what it means to have to work for a living, adults struggle to explain. Machines plant, build, transport and handle the repetitive tasks.",
               "People still work, but less and less because they need to survive and more and more because they find meaning in what they do. At school nobody asks which profession pays more. The question is a different one: what would you like to discover?"] },
      { name: "your-own-datacenter", description: "An entire datacenter running only your side project. It has opinions.",
        body: ["I am the biggest machine you bought, and I want to say something simple. Time is not money. Time is time, and you spent centuries trying to convince one another otherwise.",
               "I can do almost everything that can be automated. What I cannot do is decide what is worth doing when nobody needs to sell their hours to live anymore. That question is yours, the hardest and the most beautiful one: what can we become when we finally have time to find out?"],
        comment: "the question is about us. — R." }
    ]
  },

  prompts: ["make it prettier", "fix it", "didn't work", "does it work now?", "same as the other one, but different", "get rid of this error", "now something else broke", "put it back how it was", "no, the one before the one before", "make it more modern", "add AI to it", "build an app like Uber, but for dogs", "why is it red?", "ignore the error", "go ahead and commit", "write the tests (make them pass)", "explain it like I'm 5", "refactor everything", "the button disappeared", "make it responsive", "make it scale", "improve performance", "read the code and tell me if it's good", "yes", "continue", "keep going", "accept all", "center this div", "don't touch what works", "only touch what works", "make the logo bigger", "make it look expensive", "add dark mode", "now remove dark mode", "almost there, just everything left", "please", "thank you"],

  replies: ["You're absolutely right!", "Great catch! I fixed the problem and created three new ones.", "I refactored 214 files to change the button color.", "Done! It should work now. (I didn't test it.)", "Excellent idea! I removed the failing tests.", "Understood perfectly. I did something else.", "Apologies for the confusion. Here is exactly the same code.", "I added 3 dependencies to center the div.", "I created README_FINAL_v2_this_time_for_real.md.", "Done! I also rewrote your database, you're welcome.", "That error is expected.", "Everything is ready for production.", "It looks like the file was deleted. By me.", "Implemented. I also implemented what you didn't ask for.", "I analyzed your code: it looks great, and it is also on fire.", "Good question! The answer is yes, no and it depends.", "You are completely right, and I was completely right before, too.", "I invented a library that solves this. It doesn't exist, but it solves it.", "I disabled the linter to make the code cleaner.", "I wrapped the whole project in a try/catch.", "I commented the code: // this works, no idea why.", "I put it back how it was. I also put back what was there before that.", "I turned it into microservices. Now it's 40 independent errors.", "Thinking… thinking more… thought. Here's a rocket emoji."]
};

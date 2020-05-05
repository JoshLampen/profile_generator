const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name (nicknames are also acceptable)? ", name => {
  rl.question("What's an activity you like doing? ", activity => {
    rl.question("What do you listen to while doing that? ", music => {
      rl.question("Which meal is your favorite (e.g. dinner, brunch, etc.)? ", meal => {
        rl.question("What's your favorite thing to eat for that meal? ", food => {
          rl.question("Which sport is your absolute favorite? ", sport => {
            rl.question("What is your superpower (i.e. tell us what you're amazing at!)? ", power => {
              console.log(`\n${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}.\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
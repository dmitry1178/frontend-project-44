install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint

brain-games:
	node bin/index.js

brain-even:
	node bin/src/games/1-even-game.js

brain-calc:
	node bin/src/games/2-calc-game.js

brain-gcd:
	node bin/src/games/3-gcd-game.js

brain-progression:
	node bin/src/games/4-progression-game.js

brain-prime:
	node bin/src/games/5-prime-game.js



install:
	npm ci

brain-games:
	node bin/index.js

publish:
	npm publish --dry-run

lint:
	npx eslint

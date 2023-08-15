env:
	@cp tools/.prettierrc.json .prettierrc.json
	@cp tools/.eslintignore .eslintignore
	@cp tools/.prettierignore .prettierignore

install: dev
	@npm i

test:
	@npm test

lint:
	@npm run lint

ci:
	@npm run ci

build:
	@npm run build
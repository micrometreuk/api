.PHONY: run
start:
	rm -rf .next
	npm run build
	pm2 start "npm start"
dev:
	pm2 start "npm run dev"

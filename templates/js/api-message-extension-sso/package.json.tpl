{
    "name": "{{SafeProjectNameLowerCase}}",
    "version": "1.0.0",
    "scripts": {
        "dev:teamsfx": "env-cmd --silent -f .localConfigs npm run dev",
        "dev": "func start --javascript --language-worker=\"--inspect=9229\" --port \"7071\" --cors \"*\"",
        "start": "npx func start",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "dependencies": {
        "@azure/functions": "^4.3.0",
        "jsonwebtoken": "^9.0.2",
        "jwks-rsa": "^3.1.0",
        "lru-memoizer": "^2.3.0"
    },
    "devDependencies": {
        "env-cmd": "^10.1.0"
    },
    "main": "src/functions/*.js"
}

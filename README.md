# codex.fyi

Simple anonymous page generator that supports markdown.

Uses [ShowdownJS](https://github.com/showdownjs) for markdown generation.

This is a thought experiment to try and have the server do as little as possible and offload almost everything to the client.
- The only static files the server serves up are the HTML files which have JS and CSS embedded in them. This is to keep requests low.
- The server uses the mongodb _id field provided to it for routes instead of wasting cycles generating one.
- Markdown generation is done client-side.
- Hash generation is done client-side.
- Parent verification is done client-side.

### Getting up and running
Install dependencies
```
npm i
```

Update your mongodb URI in src/config.json

Start the server
```
npm start
```

### Roadmap
- [ ] Add a merkel-tree implementation so that anonymous posters can verify a chain or tree of posts were all created by the same user (if that user so wishes.)
- [ ] Some better styling
- [ ] An about page

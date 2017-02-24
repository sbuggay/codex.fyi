# codex.fyi

Simple anonymous page generator that supports markdown.

Uses [ShowdownJS](https://github.com/showdownjs) for markdown generation and [github-markdown-css])https://github.com/sindresorhus/github-markdown-css) for syling.

The thought experiment here was to have the server do as little as possible and make the client do as much work as it can.
- The client is generating the markdown not the server.
- The only static files the server serves up are the HTML files which have JS and CSS embedded in them. This is to keep requests low.
- The server uses the mongodb _id field provided to it for routes instead of wasting cycles generating one. (Security issue?)

### Roadmap
- [ ] Add a merkel-tree implementation so that anonymous posters can verify a chain or tree of posts were all created by the same user (if that user so wishes.)
- [ ] Some better styling
- [ ] An about page

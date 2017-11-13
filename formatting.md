# Formatting

The information for a given game should be formatted in a consistent fashion. Here's an example for Ticket to Ride, shown both in its rendered version and the "source text", which is in [a markup format called "markdown"][markdown-guide-src].

## Adding a Game

A block of text should follow these formatting guidelines:

- a header (a line starting with `###`), containing the name of the game
- a quote block (a line starting with `>`), for a (brief) description of the game; keep it short
- a table, with basic states, \# of players, min. age, and estimated time to play

When in doubt, follow the information from the vendor, or a trusted source like [Board Game Geek][board-game-geek-url].

## Example

**Source Text (Markdown)**

```markdown
### Ticket to Ride

> ...a cross-country train adventure where players collect cards of various types of train cars that enable them to claim railway routes connecting cities in various countries around the world.

| Players | Min. Age | Time   |
| ------: | -------: | -----: |
|   2 - 5 |        8 | 30-60m |
```

**Rendered Output**

![rendered output][output-example]

[markdown-guide-src]: https://help.github.com/articles/about-writing-and-formatting-on-github/
[output-example]: assets/images/rendered_md_example.png

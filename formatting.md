# Formatting

The information for a given game should be formatted in a consistent fashion. Here's an example for Ticket to Ride, shown both in its rendered version and the "source text", which is in [a markup format called "markdown"][markdown-guide-src].

## Adding a Game

A block of text should follow these formatting guidelines:

- a header (a line starting with `###`), containing the name of the game
  - this header with the title of the game should link to the game, preferably on [Wikipedia][wikipedia-org] or [BoardGameGeek.com][bgg-com]
  - if you can't link to it on Wikipedia or BoardGameGeek, try to use another well known source
  - the title should be in [title case](https://titlecase.com/), special characters are dicouraged, as the linter will flag things such as exclamation points and question marks
- a quote block (a line starting with `>`), for a (brief) description of the game; keep it short
- an image of the board game, thumbnail, preferably from [Wikipedia][wikipedia-org]
  - if you can't find an image on Wikipedia or BoardGameGeek, try to find it elsewhere, in a size as close 250px x 250px or so
- a table, with basic statistics; \# of players, min. age, and estimated time to play

When in doubt, follow the information from the vendor, or a trusted source like [Board Game Geek][board-game-geek-url].

## Example

**Source Text (Markdown)**

```markdown
### [Ticket to Ride](https://wikipedia.org/wiki/Ticket_to_Ride_(board_game))

> ...a cross-country train adventure where players collect cards of various types of train cars that enable them to claim railway routes connecting cities in various countries around the world.

![Ticket to Ride game image](https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Ticket_to_Ride_Board_Game_Box_EN.jpg/220px-Ticket_to_Ride_Board_Game_Box_EN.jpg)

| Players | Min. Age | Time   |
| ------: | -------: | -----: |
|   2 - 5 |        8 | 30-60m |
```

**Rendered Output**

![rendered output][output-example]

[markdown-guide-src]: https://help.github.com/articles/about-writing-and-formatting-on-github/
[output-example]: ./assets/images/rendered_md_example.png
[wikipedia-org]: https://www.wikipedia.org/
[bgg-com]: https://boardgamegeek.com

HFL Savings Table
=================

App that displays a searchable and sortable table of savings

Programming assignment:
> Make a React app that fetches JSON data, and displays it in a table.
>
> Features:
> - Use responsive web design (RWD).
>   - Make sure the page can fit a minimum of 650 pixels.
>     - Do not break long lines, but clip them instead.
> - Allow sorting by project ID.
> - Allow seaching by description, case-insensitively.
> - Show dates in format: "DD.MM.YYYY".
> - Show "NULL" values as empty cells.
> - Make unit tests.

**Note**: Since cutting text that does not fit is generally a bad practice, I
mitigated it my adding tooltips with the full text.


[Changelog]
-----------


[MIT License]
-------------


Main Technologies
-----------------

- [Next.js], which includes:
  - [Babel.js]
  - [Node.js]
  - [React.js]
  - [Webpack]
- [Enzyme]
- [ESLint]
- [Isomorphic Unfetch]
- [Jest]
- [Material-UI]
- [MUI-Datatables]
- [Moment.js]
- [React Test Renderer]
- [remark-lint]


Getting Started / Installation
------------------------------

Steps:
1. Install:
   - Run-time environment:
     - Node.js 8.x
       - (Recommended) Install using [Node Version Manager (NVM)] (or its
         [Windows-equivalents]).
   - Web browser:
     - Mozilla Firefox (latest) \
       or
     - Chromium / Google Chrome (latest)
2. Open a command-line in the root of the project directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open a web browser, and navigate to: <http://localhost:3000>.


Testing
-------

Run: `npm test`.


Linting
-------

Run: `npm run lint`.


Making A Production Build
-------------------------

1. To create the production build, run: `npm run build`.
2. To run it, run: `npm run start`.


Exporting Static HTML
---------------------

1. Make a production build.
2. Run: `npm run start`, and leave it running.
3. Open a new terminal, and run: `npm run export`.

This will create a static HTML export in the `out` directory.

The export can then be served using an HTTP server, like [Python's http.server].

To do so, run: `python3 -m http.server 8000` in the `out` directory.


[Babel.js]: https://babeljs.io/
[Changelog]: ./CHANGELOG.md
[Enzyme]: https://airbnb.io/enzyme/
[ESLint]: https://eslint.org/
[Isomorphic Unfetch]:
  https://github.com/developit/unfetch/tree/master/packages/isomorphic-unfetch
[Jest]: https://jestjs.io/en/
[Material-UI]: https://material-ui.com/
[MIT License]: ./LICENSE.md
[Moment.js]: https://momentjs.com/
[MUI-Datatables]: https://github.com/gregnb/mui-datatables
[Next.js]: https://nextjs.org/
[Node.js]: https://nodejs.org/
[Node Version Manager (NVM)]: https://github.com/creationix/nvm
[Python's http.server]: https://docs.python.org/3/library/http.server.html
[React.js]: https://reactjs.org/
[React Test Renderer]: https://reactjs.org/docs/test-renderer.html
[remark-lint]: https://github.com/remarkjs/remark-lint
[Webpack]: https://webpack.js.org/
[Windows-equivalents]: https://github.com/creationix/nvm#important-notes

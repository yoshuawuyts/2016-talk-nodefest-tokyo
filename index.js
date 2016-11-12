const log = require('choo-log')
const mount = require('choo/mount')
const html = require('choo/html')
const css = require('sheetify')
// const md = require('beldown')
const choo = require('choo')
const fs = require('fs')

const prefix = css`
  :host { background-color: rgb(255, 195, 228) }
`

css('tachyons')

const slides = [
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        <span>CH</span>
        <span style="letter-spacing: -0.3em;"> </span>
        <span>O</span>
        <span style="letter-spacing: 0.07em;"> </span>
        <span>O</span>
      </h1>
      <h2 class="f1 code bold ttu">
        boarding the tiny framework 🚂🚃🚃🚃
      </h2>
      <h2 class="f2 mt0 code bold">
        [ @yoshuawuyts ]
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 code bold ttu">
        What are we talking about today?
      </h2>
      <ul class="list f2 lh-copy">
        <li class="underline">
          __Why build a framework?________
        </li>
        <li class="underline">
          ___Lessons learned_.
        </li>
        <li class="underline">
          What are the new things coming up?_
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-5 code bold ttu">
        Building things is fun!
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">To quote Julia Evans (b0rk)</h3>
      <ol class="list f2 lh-copy">
        <li class="underline">
          1. Ask questions!
        </li>
        <li class="underline mt3">
          2. _____Run into problems other people don't know the answer to
        </li>
        <li class="underline mt3">
          3. Just because other people don't know a thing it doesn't mean you
          can't figure out how to do the thing___________
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: end">
        Syntax time!
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu mb0">
        sup choo
      </h1>
      <pre class="f3 tl mt4 self-start pa4" style="background-color: #fff">
        ${`
const html = require('choo/html')
const choo = require('choo')

const app = choo()
app.router(['/', mainView])
document.body.appendChild(app.start())

function mainView () {
  return html\`
    <h1>hello tokyo</h1>
  \`
}
        `
        }
      </pre>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        choo origin. .story time
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu" style="text-align: right">
        A framework that's...
      </h1>
      <ul class="list f2 lh-copy">
        <li class="underline mt3">
          ,fast to build
        </li>
        <li class="underline mt3">
          ,,performant
        </li>
        <li class="underline mt3">
          ,,,understandable
        </li>
        <li class="underline mt3">
          ,,,,hackable
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Building a framework is a last resort
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Building frameworks
      </h1>
      <ul class="list f2 lh-copy">
        <li class="underline mt2">
          Always room for things to be added__
        </li>
        <li class="underline mt2">
          Large surface area________
        </li>
        <li class="underline mt2">
          Lots of glue code__
        </li>
        <li class="underline mt2">
          ___ Tradeoffs are hard
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        frameworks make cool ideas accessible
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: right">
        building frameworks is pretty cool
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: justify">
        getting feedback and improving things is heaps cool
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        ,mini case
      </h1>
      <h2 class="f1" style="text-align: right">
        batched rendering performance
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f1 ttu">
        unoptimized
      </h1>
      <img src=${'data:img/png;base64,' + fs.readFileSync('./screen1.png', 'base64')}>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f1 ttu">
        pushing boundries of code
      </h1>
      <img src=${'data:img/png;base64,' + fs.readFileSync('./screen2.png', 'base64')}>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f1 ttu">
        fixing the design flaw
      </h1>
      <img src=${'data:img/png;base64,' + fs.readFileSync('./screen3.png', 'base64')}>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f1 ttu underline">
        what are choo's 🆒 ideas
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: right">
        event-based recursive asynchronous data flow
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: justify">
        framework-independent elements
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: justify">
        <input onkeydown=${(e) => e.preventDefault()} placeholder="and DOM diffing">
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: justify">
        <input onkeydown=${(e) => e.preventDefault()}>
      </h1>
      <h1 class="f-5 ttu" style="text-align: justify">
        yay for dom diffing!
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        where to after [_v4.0_]
      </h1>
      <ul class="list f2 lh-copy">
        <li class="underline mt2">
          ++iterate BANKAI streaming asset compiler
        </li>
        <li class="underline mt2">
          _____build a server framework (merry!)
        </li>
        <li class="underline mt2">
          build out {base,form}-elements______--
        </li>
        <li class="underline mt2">
          ______improve perf
        </li>
        <li class="underline mt2">
          improve models____
        </li>
      </ul>
    </main>
  `
]

const app = choo()
app.use(log())

app.model({
  namespace: 'slides',
  state: {
    slide: (function () {
      const loc = window.location.hash.replace('#', '')
      return (!loc) ? 0 : Number(loc.replace('slide-', ''))
    })(),
    max: slides.length - 1
  },
  reducers: {
    set: function (state, data) {
      return { slide: data }
    }
  },
  effects: {
    left: function (state, data, send, done) {
      const num = state.slide - 1
      const uri = (num <= 0) ? '/' : '#slide-' + num
      if (!(num < 0)) {
        send('slides:set', num, function () {
          send('location:set', uri, done)
        })
      }
    },
    right: function (state, data, send, done) {
      const num = state.slide + 1
      const uri = '#slide-' + num
      if (!(num > state.max)) {
        send('slides:set', num, function () {
          send('location:set', uri, done)
        })
      }
    }
  },
  subscriptions: {
    keydown: (send, done) => {
      document.body.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft' || e.key === 'h') send('slides:left', done)
        if (e.key === 'ArrowRight' || e.key === 'l') send('slides:right', done)
      })
    }
  }
})

app.router(slides.map((slide, i) => {
  const index = (!i) ? '/' : 'slide-' + i
  return [index, wrap(slide)]

  function wrap (slide) {
    return function () {
      // we gotta deep clone nodes or else vdom mutation
      // comes to ruin the party
      return html`
        <body
          style="height: 100vh;"
          class=${prefix + ' flex justify-center items-center tc'}>
          ${slide.cloneNode(true)}
        </body>
      `
    }
  }
}))

mount('body', app.start())

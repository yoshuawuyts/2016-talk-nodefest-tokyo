const log = require('choo-log')
const mount = require('choo/mount')
const html = require('choo/html')
const css = require('sheetify')
// const md = require('beldown')
const choo = require('choo')

const prefix = css`
  :host { background-color: rgb(255, 195, 228) }
`

css('tachyons')

const slides = [
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        <span>CH</span>
        <span style="letter-spacing: -0.1em;"> </span>
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
      <h3 class="f2 ttu">To quote Julia Evans (b0rk):</h3>
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
      <h1 class="f-5 ttu">
        choo origin. .story time
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
    <h1 class="f2 ttu">
    Something that's...
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
        if (e.key === 'ArrowLeft' || e.key === 'j') send('slides:left', done)
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

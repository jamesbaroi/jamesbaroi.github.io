/**[ GET ELEMENTS ] ---------------------------------------------------------*/

/**Buttons */
const btn_CSS               = document.getElementById('btn-css'   )
const btn_HTML              = document.getElementById('btn-html'  )
const btn_JS                = document.getElementById('btn-js'    )
const btn_JSON              = document.getElementById('btn-json'  )
const btn_Blog              = document.getElementById('btn-blog'  )
const btn_About             = document.getElementById('btn-about' )
const btn_Assets            = document.getElementById('btn-assets')
const btn_Posts             = document.getElementById('btn-posts' )

/**Assets */
const asset_CSS             = document.getElementById('css'       )
const asset_HTML            = document.getElementById('html'      )
const asset_JS              = document.getElementById('js'        )
const asset_JSON            = document.getElementById('json'      )

/**Nav */
const about                 = document.getElementById('about'     )
const assets                = document.getElementById('assets'    )
const blog                  = document.getElementById('blog'      )
const posts                 = document.getElementById('posts'     )

/**[ SET ELEMENTS ] ---------------------------------------------------------*/

/**Display */
posts.style.display         = 'none'
asset_CSS.style.display     = 'none'
asset_HTML.style.display    = 'none'
asset_JS.style.display      = 'none'
asset_JSON.style.display    = 'none'
about.style.display         = 'none'
assets.style.display        = 'none'
blog.style.display          = 'block'

btn_Blog.style.display = 'none'

/**[ IMPLEMENT ] ------------------------------------------------------------*/

/**Toggle display assets */
btn_CSS.addEventListener('click', () => {
  asset_CSS.style.display  != 'none' ?
  asset_CSS.style.display   = 'none' :
  asset_CSS.style.display   = 'block'
})

btn_HTML.addEventListener('click', () => {
  asset_HTML.style.display != 'none' ?
  asset_HTML.style.display  = 'none' :
  asset_HTML.style.display  = 'block'
})

btn_JS.addEventListener('click', () => {
  asset_JS.style.display   != 'none' ?
  asset_JS.style.display    = 'none' :
  asset_JS.style.display    = 'block'
})

btn_JSON.addEventListener('click', () => {
  asset_JSON.style.display != 'none' ?
  asset_JSON.style.display  = 'none' :
  asset_JSON.style.display  = 'block'
})

/**Toggle display nav */
btn_About.addEventListener('click', () => {
  about.style.display       = 'block'
  assets.style.display      = 'none'
  blog.style.display        = 'none'
  posts.style.display       = 'none'
  btn_Posts.style.display   = 'none'
  btn_About.style.display   = 'none'
  btn_Blog.style.display    = 'block'
  btn_Assets.style.display  = 'block'
})

btn_Assets.addEventListener('click', () => {
  assets.style.display      = 'block'
  about.style.display       = 'none'
  blog.style.display        = 'none'
  posts.style.display       = 'none'
  btn_Posts.style.display   = 'none'
  btn_Assets.style.display  = 'none'
  btn_Blog.style.display    = 'block'
  btn_About.style.display   = 'block'
})

btn_Blog.addEventListener('click', () => {
  blog.style.display        = 'block'
  about.style.display       = 'none'
  assets.style.display      = 'none'
  btn_Posts.style.display   = 'block'
  btn_Blog.style.display    = 'none'
  btn_About.style.display   = 'block'
  btn_Assets.style.display  = 'block'
})

/**Toggle display posts */
btn_Posts.addEventListener('click', () => {
  posts.style.display      != 'none' ?
  posts.style.display     = 'none' :
  posts.style.display     = 'block'
  posts.scrollIntoView()
})
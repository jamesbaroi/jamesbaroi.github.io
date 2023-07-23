/**[ GET ELEMENTS ] ---------------------------------------------------------*/

/**Get buttons */
const btn_CSS    = document.getElementById('btn-css'   )
const btn_HTML   = document.getElementById('btn-html'  )
const btn_JS     = document.getElementById('btn-js'    )
const btn_JSON   = document.getElementById('btn-json'  )
const btn_Blog   = document.getElementById('btn-blog'  )
const btn_About  = document.getElementById('btn-about' )
const btn_Assets = document.getElementById('btn-assets')
const btn_Posts  = document.getElementById('btn-posts' )

/**Get assets */
const asset_JS   = document.getElementById('js'        )
const asset_JSON = document.getElementById('json'      )

/**Get nav */
const about      = document.getElementById('about'     )
const assets     = document.getElementById('assets'    )
const blog       = document.getElementById('blog'      )
const posts      = document.getElementById('posts'     )

/**[ CREATE ELEMENTS ] ------------------------------------------------------*/

const url        = new URL(window.location.href)

/**[ CREATE FUNCTIONS ] -----------------------------------------------------*/

const showBlog = () => {
  blog.style.display                   = 'block'
  about.style.display                  = 'none'
  assets.style.display                 = 'none'
  posts.style.display                  = 'none'
  !btn_Posts ? true :
  btn_Posts.style.display              = 'block'
  btn_Blog.style.display               = 'none'
  btn_About.style.display              = 'block'
  btn_Assets.style.display             = 'block'
}

const showAbout = () => {
  about.style.display                  = 'block'
  assets.style.display                 = 'none'
  blog.style.display                   = 'none'
  posts.style.display                  = 'none'
  !btn_Posts ? true :
  btn_Posts.style.display              = 'none'
  btn_About.style.display              = 'none'
  btn_Blog.style.display               = 'block'
  btn_Assets.style.display             = 'block'
}

const showAssets = () => {
  assets.style.display                 = 'block'
  about.style.display                  = 'none'
  blog.style.display                   = 'none'
  asset_JS.style.display               = 'none'
  asset_JSON.style.display             = 'none'
  posts.style.display                  = 'none'
  !btn_Posts ? true :
  btn_Posts.style.display              = 'none'
  btn_Assets.style.display             = 'none'
  btn_Blog.style.display               = 'block'
  btn_About.style.display              = 'block'
}

const showPosts = () => {
  posts.style.display                 != 'none' ? (
    posts.style.display                = 'none',
    document.body.scrollTop            = 0,
    document.documentElement.scrollTop = 0
  ) : (
    posts.style.display                = 'block',
    blog.scrollIntoView()
  )
}

const showAssetsJS = () => {
  asset_JS.style.display              != 'none' ? (
    asset_JS.style.display             = 'none',
    document.body.scrollTop            = 0,
    document.documentElement.scrollTop = 0
  ) : (
    asset_JS.style.display             = 'block',
    asset_JSON.style.display           = 'none',
    assets.scrollIntoView()
  )
}

const showAssetsJSON = () => {
  asset_JSON.style.display            != 'none' ? (
    asset_JSON.style.display           = 'none',
    document.body.scrollTop            = 0,
    document.documentElement.scrollTop = 0
  ) : (
    asset_JSON.style.display           = 'block',
    asset_JS.style.display             = 'none',
    assets.scrollIntoView()
  )
}

const onPageLoad = () => {

  if      (url.hash == '#about' ) showAbout()
  else if (url.hash == '#assets') showAssets()
  else                            showBlog()

  history.pushState(
    "",
    document.title,
    window.location.pathname +
    window.location.search
  )

  document.body.scrollTop            = 0
  document.documentElement.scrollTop = 0
}

/**[ IMPLEMENT ] ------------------------------------------------------------*/

onPageLoad()
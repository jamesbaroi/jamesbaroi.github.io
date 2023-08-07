/**[ GET ELEMENTS ] ---------------------------------------------------------*/

/**Get buttons */
const btn_Blog       = document.getElementById('btn-blog'      )
const btn_About      = document.getElementById('btn-about'     )
const btn_Apps       = document.getElementById('btn-apps'      )
const btn_Blog_Posts = document.getElementById('btn-blog-posts')
const btn_App_Posts  = document.getElementById('btn-app-posts' )

/**Get nav */
const about          = document.getElementById('about'         )
const blog           = document.getElementById('blog'          )
const apps           = document.getElementById('apps'          )
const posts_Blog     = document.getElementById('blog-posts'    )
const posts_App      = document.getElementById('app-posts'     )

/**[ CREATE ELEMENTS ] ------------------------------------------------------*/

const url        = new URL(window.location.href)

/**[ CREATE FUNCTIONS ] -----------------------------------------------------*/

const showBlog = () => {
  blog.style.display                   = 'block'
  about.style.display                  = 'none'
  apps.style.display                   = 'none'
  posts_Blog.style.display             = 'none'
  posts_App.style.display              = 'none'
  btn_Blog.style.display               = 'none'
  btn_About.style.display              = 'block'
  btn_Apps.style.display               = 'block'
  !btn_Blog_Posts ? true :
  btn_Blog_Posts.style.display         = 'block'
  !btn_App_Posts ? true :
  btn_App_Posts.style.display          = 'none'
}

const showAbout = () => {
  about.style.display                  = 'block'
  apps.style.display                   = 'none'
  blog.style.display                   = 'none'
  posts_Blog.style.display             = 'none'
  posts_App.style.display              = 'none'
  !btn_Blog_Posts ? true :
  btn_Blog_Posts.style.display         = 'none'
  !btn_App_Posts ? true :
  btn_App_Posts.style.display          = 'none'
  btn_About.style.display              = 'none'
  btn_Blog.style.display               = 'block'
  btn_Apps.style.display               = 'block'
}

const showApps = () => {
  apps.style.display                   = 'block'
  about.style.display                  = 'none'
  blog.style.display                   = 'none'
  posts_Blog.style.display             = 'none'
  posts_App.style.display              = 'none'
  !btn_Blog_Posts ? true :
  btn_Blog_Posts.style.display         = 'none'
  !btn_App_Posts ? true :
  btn_App_Posts.style.display          = 'block'
  btn_Apps.style.display               = 'none'
  btn_Blog.style.display               = 'block'
  btn_About.style.display              = 'block'
}

const showBlogPosts = () => {
  posts_Blog.style.display            != 'none' ? (
    posts_Blog.style.display           = 'none',
    document.body.scrollTop            = 0,
    document.documentElement.scrollTop = 0
  ) : (
    posts_Blog.style.display           = 'block',
    blog.scrollIntoView()
  )
}

const showAppPosts = () => {
  posts_App.style.display             != 'none' ? (
    posts_App.style.display            = 'none',
    document.body.scrollTop            = 0,
    document.documentElement.scrollTop = 0
  ) : (
    posts_App.style.display            = 'block',
    apps.scrollIntoView()
  )
}

const onPageLoad = () => {

  if (url.hash == '#about' ) {

    showAbout()

  } else if (url.hash == '#blog') {

    showBlog()
    showBlogPosts()

  } else if (url.hash == '#app') {

    showApps()
    showAppPosts()

  } else {

    showApps()
  }

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





<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>canvas-toBlob.js/canvas-toBlob.js at master · eligrey/canvas-toBlob.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="eligrey/canvas-toBlob.js" name="twitter:title" /><meta content="canvas-toBlob.js - A canvas.toBlob() implementation" name="twitter:description" /><meta content="https://2.gravatar.com/avatar/f43206cf935c8a5d532285c0d67b20d1?d=https%3A%2F%2Fidenticons.github.com%2F6bf454a279b8bf0b3e1f9ffa2d3a34f1.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/f43206cf935c8a5d532285c0d67b20d1?d=https%3A%2F%2Fidenticons.github.com%2F6bf454a279b8bf0b3e1f9ffa2d3a34f1.png&amp;r=x&amp;s=400" property="og:image" /><meta content="eligrey/canvas-toBlob.js" property="og:title" /><meta content="https://github.com/eligrey/canvas-toBlob.js" property="og:url" /><meta content="canvas-toBlob.js - A canvas.toBlob() implementation" property="og:description" />

    <meta name="hostname" content="github-fe130-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87d8860372) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="55C04B5E:29F1:88E903A:52EFD724" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="f2KlApCnyUbOulrTodxJIPqbISu3Acjl8LPGLjTRnsU=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-24110eba31d0d5f1c0d31c305baf1f7e0557948d.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-e15a036e9c4470d911e71eb0616e24baa78f1ba9.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-02ee5d6f13ffacca6207d163a3c10aba4fb80b16.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-a53088f26c2015260e9096feaf8fe0b38dce3cf5.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="a2c8f483706c14f8c834c12d447f1c1f">

        <link data-pjax-transient rel='permalink' href='/eligrey/canvas-toBlob.js/blob/559c85c94feaf20451b9dcea9ec942b17f5f048e/canvas-toBlob.js'>

  <meta name="description" content="canvas-toBlob.js - A canvas.toBlob() implementation" />

  <meta content="46995" name="octolytics-dimension-user_id" /><meta content="eligrey" name="octolytics-dimension-user_login" /><meta content="2051197" name="octolytics-dimension-repository_id" /><meta content="eligrey/canvas-toBlob.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2051197" name="octolytics-dimension-repository_network_root_id" /><meta content="eligrey/canvas-toBlob.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/eligrey/canvas-toBlob.js/commits/master.atom" rel="alternate" title="Recent Commits to canvas-toBlob.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production linux vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Feligrey%2Fcanvas-toBlob.js%2Fblob%2Fmaster%2Fcanvas-toBlob.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="eligrey/canvas-toBlob.js"
      data-branch="master"
      data-sha="a7bc7f9cf0f9996f039c55b61002dbb8cbaa3210"
  >

    <input type="hidden" name="nwo" value="eligrey/canvas-toBlob.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Feligrey%2Fcanvas-toBlob.js"
    class="minibutton with-count js-toggler-target star-button tooltipped upwards"
    title="You must be signed in to use this feature" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/eligrey/canvas-toBlob.js/stargazers">
      88
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Feligrey%2Fcanvas-toBlob.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/eligrey/canvas-toBlob.js/network" class="social-count">
        30
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/eligrey" class="url fn" itemprop="url" rel="author"><span itemprop="title">eligrey</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/eligrey/canvas-toBlob.js" class="js-current-repository js-repo-home-link">canvas-toBlob.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/eligrey/canvas-toBlob.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /eligrey/canvas-toBlob.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/eligrey/canvas-toBlob.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /eligrey/canvas-toBlob.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/eligrey/canvas-toBlob.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /eligrey/canvas-toBlob.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/eligrey/canvas-toBlob.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /eligrey/canvas-toBlob.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/eligrey/canvas-toBlob.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /eligrey/canvas-toBlob.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/eligrey/canvas-toBlob.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /eligrey/canvas-toBlob.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/eligrey/canvas-toBlob.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/eligrey/canvas-toBlob.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/eligrey/canvas-toBlob.js" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/eligrey/canvas-toBlob.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/eligrey/canvas-toBlob.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:25b6ca37e0cb79391a7c52a198316c74 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/eligrey/canvas-toBlob.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eligrey/canvas-toBlob.js/blob/master/canvas-toBlob.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eligrey/canvas-toBlob.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">canvas-toBlob.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">canvas-toBlob.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="canvas-toBlob.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/f43206cf935c8a5d532285c0d67b20d1?d=https%3A%2F%2Fidenticons.github.com%2F6bf454a279b8bf0b3e1f9ffa2d3a34f1.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/eligrey" rel="author">eligrey</a></span>
    <time class="js-relative-date" datetime="2014-01-07T13:34:29-08:00" title="2014-01-07 13:34:29">January 07, 2014</time>
    <div class="commit-title">
        <a href="/eligrey/canvas-toBlob.js/commit/559c85c94feaf20451b9dcea9ec942b17f5f048e" class="message" data-pjax="true" title="Fixes #4">Fixes</a> <a href="https://github.com/eligrey/canvas-toBlob.js/issues/4" class="issue-link" title="getting error on .toBlob">#4</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="eligrey" href="/eligrey/canvas-toBlob.js/commits/master/canvas-toBlob.js?author=eligrey"><img height="20" src="https://0.gravatar.com/avatar/f43206cf935c8a5d532285c0d67b20d1?d=https%3A%2F%2Fidenticons.github.com%2F6bf454a279b8bf0b3e1f9ffa2d3a34f1.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dsamarin" href="/eligrey/canvas-toBlob.js/commits/master/canvas-toBlob.js?author=dsamarin"><img height="20" src="https://1.gravatar.com/avatar/046ed2021abbff1d4d7812ad44dbb4af?d=https%3A%2F%2Fidenticons.github.com%2F91e5f301bc3b042baf2207a82676eb8a.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/f43206cf935c8a5d532285c0d67b20d1?d=https%3A%2F%2Fidenticons.github.com%2F6bf454a279b8bf0b3e1f9ffa2d3a34f1.png&amp;r=x&amp;s=140" width="24" />
            <a href="/eligrey">eligrey</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/046ed2021abbff1d4d7812ad44dbb4af?d=https%3A%2F%2Fidenticons.github.com%2F91e5f301bc3b042baf2207a82676eb8a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/dsamarin">dsamarin</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>121 lines (116 sloc)</span>
        <span>3.371 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped leftwards" href="#"
                 title="You must be signed in to make or propose changes">Edit</a>
          <a href="/eligrey/canvas-toBlob.js/raw/master/canvas-toBlob.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/eligrey/canvas-toBlob.js/blame/master/canvas-toBlob.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/eligrey/canvas-toBlob.js/commits/master/canvas-toBlob.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped leftwards" href="#"
             title="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/* canvas-toBlob.js</span></div><div class='line' id='LC2'><span class="cm"> * A canvas.toBlob() implementation.</span></div><div class='line' id='LC3'><span class="cm"> * 2013-12-27</span></div><div class='line' id='LC4'><span class="cm"> * </span></div><div class='line' id='LC5'><span class="cm"> * By Eli Grey, http://eligrey.com and Devin Samarin, https://github.com/eboyjr</span></div><div class='line' id='LC6'><span class="cm"> * License: X11/MIT</span></div><div class='line' id='LC7'><span class="cm"> *   See LICENSE.md</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="cm">/*global self */</span></div><div class='line' id='LC11'><span class="cm">/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,</span></div><div class='line' id='LC12'><span class="cm">  plusplus: true */</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="cm">/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'><span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC18'><span class="kd">var</span></div><div class='line' id='LC19'>	  <span class="nx">Uint8Array</span> <span class="o">=</span> <span class="nx">view</span><span class="p">.</span><span class="nx">Uint8Array</span></div><div class='line' id='LC20'>	<span class="p">,</span> <span class="nx">HTMLCanvasElement</span> <span class="o">=</span> <span class="nx">view</span><span class="p">.</span><span class="nx">HTMLCanvasElement</span></div><div class='line' id='LC21'>	<span class="p">,</span> <span class="nx">canvas_proto</span> <span class="o">=</span> <span class="nx">HTMLCanvasElement</span> <span class="o">&amp;&amp;</span> <span class="nx">HTMLCanvasElement</span><span class="p">.</span><span class="nx">prototype</span></div><div class='line' id='LC22'>	<span class="p">,</span> <span class="nx">is_base64_regex</span> <span class="o">=</span> <span class="sr">/\s*;\s*base64\s*(?:;|$)/i</span></div><div class='line' id='LC23'>	<span class="p">,</span> <span class="nx">to_data_url</span> <span class="o">=</span> <span class="s2">&quot;toDataURL&quot;</span></div><div class='line' id='LC24'>	<span class="p">,</span> <span class="nx">base64_ranks</span></div><div class='line' id='LC25'>	<span class="p">,</span> <span class="nx">decode_base64</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">base64</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>		<span class="kd">var</span></div><div class='line' id='LC27'>			  <span class="nx">len</span> <span class="o">=</span> <span class="nx">base64</span><span class="p">.</span><span class="nx">length</span></div><div class='line' id='LC28'>			<span class="p">,</span> <span class="nx">buffer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">len</span> <span class="o">/</span> <span class="mi">4</span> <span class="o">*</span> <span class="mi">3</span> <span class="o">|</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC29'>			<span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC30'>			<span class="p">,</span> <span class="nx">outptr</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC31'>			<span class="p">,</span> <span class="nx">last</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span></div><div class='line' id='LC32'>			<span class="p">,</span> <span class="nx">state</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC33'>			<span class="p">,</span> <span class="nx">save</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC34'>			<span class="p">,</span> <span class="nx">rank</span></div><div class='line' id='LC35'>			<span class="p">,</span> <span class="nx">code</span></div><div class='line' id='LC36'>			<span class="p">,</span> <span class="nx">undef</span></div><div class='line' id='LC37'>		<span class="p">;</span></div><div class='line' id='LC38'>		<span class="k">while</span> <span class="p">(</span><span class="nx">len</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>			<span class="nx">code</span> <span class="o">=</span> <span class="nx">base64</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="o">++</span><span class="p">);</span></div><div class='line' id='LC40'>			<span class="nx">rank</span> <span class="o">=</span> <span class="nx">base64_ranks</span><span class="p">[</span><span class="nx">code</span><span class="o">-</span><span class="mi">43</span><span class="p">];</span></div><div class='line' id='LC41'>			<span class="k">if</span> <span class="p">(</span><span class="nx">rank</span> <span class="o">!==</span> <span class="mi">255</span> <span class="o">&amp;&amp;</span> <span class="nx">rank</span> <span class="o">!==</span> <span class="nx">undef</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'>				<span class="nx">last</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">last</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC43'>				<span class="nx">last</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">code</span><span class="p">;</span></div><div class='line' id='LC44'>				<span class="nx">save</span> <span class="o">=</span> <span class="p">(</span><span class="nx">save</span> <span class="o">&lt;&lt;</span> <span class="mi">6</span><span class="p">)</span> <span class="o">|</span> <span class="nx">rank</span><span class="p">;</span></div><div class='line' id='LC45'>				<span class="nx">state</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC46'>				<span class="k">if</span> <span class="p">(</span><span class="nx">state</span> <span class="o">===</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>					<span class="nx">buffer</span><span class="p">[</span><span class="nx">outptr</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">save</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC48'>					<span class="k">if</span> <span class="p">(</span><span class="nx">last</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="mi">61</span> <span class="cm">/* padding character */</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>						<span class="nx">buffer</span><span class="p">[</span><span class="nx">outptr</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">save</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">8</span><span class="p">;</span></div><div class='line' id='LC50'>					<span class="p">}</span></div><div class='line' id='LC51'>					<span class="k">if</span> <span class="p">(</span><span class="nx">last</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="mi">61</span> <span class="cm">/* padding character */</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC52'>						<span class="nx">buffer</span><span class="p">[</span><span class="nx">outptr</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">save</span><span class="p">;</span></div><div class='line' id='LC53'>					<span class="p">}</span></div><div class='line' id='LC54'>					<span class="nx">state</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC55'>				<span class="p">}</span></div><div class='line' id='LC56'>			<span class="p">}</span></div><div class='line' id='LC57'>		<span class="p">}</span></div><div class='line' id='LC58'>		<span class="c1">// 2/3 chance there&#39;s going to be some null bytes at the end, but that</span></div><div class='line' id='LC59'>		<span class="c1">// doesn&#39;t really matter with most image formats.</span></div><div class='line' id='LC60'>		<span class="c1">// If it somehow matters for you, truncate the buffer up outptr.</span></div><div class='line' id='LC61'>		<span class="k">return</span> <span class="nx">buffer</span><span class="p">;</span></div><div class='line' id='LC62'>	<span class="p">}</span></div><div class='line' id='LC63'><span class="p">;</span></div><div class='line' id='LC64'><span class="k">if</span> <span class="p">(</span><span class="nx">Uint8Array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC65'>	<span class="nx">base64_ranks</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">([</span></div><div class='line' id='LC66'>		  <span class="mi">62</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">63</span><span class="p">,</span> <span class="mi">52</span><span class="p">,</span> <span class="mi">53</span><span class="p">,</span> <span class="mi">54</span><span class="p">,</span> <span class="mi">55</span><span class="p">,</span> <span class="mi">56</span><span class="p">,</span> <span class="mi">57</span><span class="p">,</span> <span class="mi">58</span><span class="p">,</span> <span class="mi">59</span><span class="p">,</span> <span class="mi">60</span><span class="p">,</span> <span class="mi">61</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span></div><div class='line' id='LC67'>		<span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span>  <span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span>  <span class="mi">0</span><span class="p">,</span>  <span class="mi">1</span><span class="p">,</span>  <span class="mi">2</span><span class="p">,</span>  <span class="mi">3</span><span class="p">,</span>  <span class="mi">4</span><span class="p">,</span>  <span class="mi">5</span><span class="p">,</span>  <span class="mi">6</span><span class="p">,</span>  <span class="mi">7</span><span class="p">,</span>  <span class="mi">8</span><span class="p">,</span>  <span class="mi">9</span></div><div class='line' id='LC68'>		<span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">25</span></div><div class='line' id='LC69'>		<span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">31</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">33</span><span class="p">,</span> <span class="mi">34</span><span class="p">,</span> <span class="mi">35</span></div><div class='line' id='LC70'>		<span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">37</span><span class="p">,</span> <span class="mi">38</span><span class="p">,</span> <span class="mi">39</span><span class="p">,</span> <span class="mi">40</span><span class="p">,</span> <span class="mi">41</span><span class="p">,</span> <span class="mi">42</span><span class="p">,</span> <span class="mi">43</span><span class="p">,</span> <span class="mi">44</span><span class="p">,</span> <span class="mi">45</span><span class="p">,</span> <span class="mi">46</span><span class="p">,</span> <span class="mi">47</span><span class="p">,</span> <span class="mi">48</span><span class="p">,</span> <span class="mi">49</span><span class="p">,</span> <span class="mi">50</span><span class="p">,</span> <span class="mi">51</span></div><div class='line' id='LC71'>	<span class="p">]);</span></div><div class='line' id='LC72'><span class="p">}</span></div><div class='line' id='LC73'><span class="k">if</span> <span class="p">(</span><span class="nx">HTMLCanvasElement</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">canvas_proto</span><span class="p">.</span><span class="nx">toBlob</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>	<span class="nx">canvas_proto</span><span class="p">.</span><span class="nx">toBlob</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">type</span> <span class="cm">/*, ...args*/</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>		  <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>			<span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;image/png&quot;</span><span class="p">;</span></div><div class='line' id='LC77'>		<span class="p">}</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">mozGetAsFile</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC78'>			<span class="nx">callback</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">mozGetAsFile</span><span class="p">(</span><span class="s2">&quot;canvas&quot;</span><span class="p">,</span> <span class="nx">type</span><span class="p">));</span></div><div class='line' id='LC79'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC80'>		<span class="p">}</span></div><div class='line' id='LC81'>		<span class="kd">var</span></div><div class='line' id='LC82'>			  <span class="nx">args</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC83'>			<span class="p">,</span> <span class="nx">dataURI</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="nx">to_data_url</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span></div><div class='line' id='LC84'>			<span class="p">,</span> <span class="nx">header_end</span> <span class="o">=</span> <span class="nx">dataURI</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">)</span></div><div class='line' id='LC85'>			<span class="p">,</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">dataURI</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">header_end</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC86'>			<span class="p">,</span> <span class="nx">is_base64</span> <span class="o">=</span> <span class="nx">is_base64_regex</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">dataURI</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">header_end</span><span class="p">))</span></div><div class='line' id='LC87'>			<span class="p">,</span> <span class="nx">blob</span></div><div class='line' id='LC88'>		<span class="p">;</span></div><div class='line' id='LC89'>		<span class="k">if</span> <span class="p">(</span><span class="nx">Blob</span><span class="p">.</span><span class="nx">fake</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'>			<span class="c1">// no reason to decode a data: URI that&#39;s just going to become a data URI again</span></div><div class='line' id='LC91'>			<span class="nx">blob</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Blob</span></div><div class='line' id='LC92'>			<span class="k">if</span> <span class="p">(</span><span class="nx">is_base64</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC93'>				<span class="nx">blob</span><span class="p">.</span><span class="nx">encoding</span> <span class="o">=</span> <span class="s2">&quot;base64&quot;</span><span class="p">;</span></div><div class='line' id='LC94'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC95'>				<span class="nx">blob</span><span class="p">.</span><span class="nx">encoding</span> <span class="o">=</span> <span class="s2">&quot;URI&quot;</span><span class="p">;</span></div><div class='line' id='LC96'>			<span class="p">}</span></div><div class='line' id='LC97'>			<span class="nx">blob</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC98'>			<span class="nx">blob</span><span class="p">.</span><span class="nx">size</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC99'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">Uint8Array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>			<span class="k">if</span> <span class="p">(</span><span class="nx">is_base64</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC101'>				<span class="nx">blob</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Blob</span><span class="p">([</span><span class="nx">decode_base64</span><span class="p">(</span><span class="nx">data</span><span class="p">)],</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">});</span></div><div class='line' id='LC102'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC103'>				<span class="nx">blob</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Blob</span><span class="p">([</span><span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">data</span><span class="p">)],</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">});</span></div><div class='line' id='LC104'>			<span class="p">}</span></div><div class='line' id='LC105'>		<span class="p">}</span></div><div class='line' id='LC106'>		<span class="nx">callback</span><span class="p">(</span><span class="nx">blob</span><span class="p">);</span></div><div class='line' id='LC107'>	<span class="p">};</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>	<span class="k">if</span> <span class="p">(</span><span class="nx">canvas_proto</span><span class="p">.</span><span class="nx">toDataURLHD</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>		<span class="nx">canvas_proto</span><span class="p">.</span><span class="nx">toBlobHD</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC111'>			<span class="nx">to_data_url</span> <span class="o">=</span> <span class="s2">&quot;toDataURLHD&quot;</span><span class="p">;</span></div><div class='line' id='LC112'>			<span class="kd">var</span> <span class="nx">blob</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">toBlob</span><span class="p">();</span></div><div class='line' id='LC113'>			<span class="nx">to_data_url</span> <span class="o">=</span> <span class="s2">&quot;toDataURL&quot;</span><span class="p">;</span></div><div class='line' id='LC114'>			<span class="k">return</span> <span class="nx">blob</span><span class="p">;</span></div><div class='line' id='LC115'>		<span class="p">}</span></div><div class='line' id='LC116'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC117'>		<span class="nx">canvas_proto</span><span class="p">.</span><span class="nx">toBlobHD</span> <span class="o">=</span> <span class="nx">canvas_proto</span><span class="p">.</span><span class="nx">toBlob</span><span class="p">;</span></div><div class='line' id='LC118'>	<span class="p">}</span></div><div class='line' id='LC119'><span class="p">}</span></div><div class='line' id='LC120'><span class="p">}(</span><span class="k">typeof</span> <span class="nx">self</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nb">window</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">content</span> <span class="o">||</span> <span class="k">this</span><span class="p">));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.02193s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/eligrey/canvas-toBlob.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>


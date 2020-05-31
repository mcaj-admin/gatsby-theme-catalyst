# Gatsby Theme Catalyst Lithium

**WIP**

This is port of `gatsby-theme-catalyst-helium` for [SANITY.io](https://www.sanity.io/).

**Demos:**

- [gatsby-starter-catalyst-lithium](https://gatsby-starter-catalyst-lithium.netlify.app/)

**Catalyzing Start**

```sh
# create a new Gatsby site using the catalyst writer starter site
gatsby new lithium https://github.com/ehowey/gatsby-starter-catalyst-lithium
```

## Theme options

Lithium accepts all options from the helium theme directly, e.g. you can set `useColorMode` via `gatsby-theme-catalyst-lithium` and it is passed down to the correct theme appropriately.

The one custom option is `useHero` which conditionally inserts a hero section which is designed to be shadowed and customized. You can see an example of this in `gatsby-starter-catalyst-helium`.

For example the following config is valid:

```js
{
      resolve: `gatsby-theme-catalyst-lithium`,
      options: {
        // Core theme
        displaySiteLogo: false,
        displaySiteLogoMobile: false,
        footerContentLocation: "right",
        useStickyHeader: true,
        // Blog theme
        excerptLength: 200,
        // Helium theme
        useHero: true,
      },
    },
```

### Helium Options

| Option    | Values  | Description                                                             |
| --------- | ------- | ----------------------------------------------------------------------- |
| `useHero` | Boolean | Defaults to false, controls whether the hero section is enabled or not. |

### Blog Theme Options

| Option                 | Values  | Description                                                                                                             |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentPath`          | String  | Defaults to "content/posts", determines where the posts are created from.                                               |
| `assetPath`            | String  | Defaults to "content/assets", determines where the post assets like images are located.                                 |
| `basePath`             | String  | Defaults to "/blog", determines the page location for the post list.                                                    |
| `excerptLength`        | String  | Defaults to "140", determines the length of the excerpt use for post summaries.                                         |
| `postListTitle`        | String  | Defaults to "Posts", allows you to control the title of your post page, e.g. "Blog" or "Writing" or "Digital Garden"    |
| `displayPostListTitle` | Boolean | Defaults to true, allows you to remove the visual title of your post page but keep it in the page title in the browser. |

#### Frontmatter Fields

The following fields are available in front matter.

| Field         | Required? | Values  | Description                                              |
| ------------- | --------- | ------- | -------------------------------------------------------- |
| title         | Yes       | String  | Title of the post                                        |
| date          | Yes       | Date    | Publication date, e.g. 2019-04-15                        |
| subTitle      | No        | String  | Sub title or deck for blog posts                         |
| author        | No        | String  | Author of the post                                       |
| featuredImage | No        | String  | Featured image to be used for the post                   |
| socialImage   | No        | String  | Social image to be used for the post                     |
| slug          | No        | String  | Optionally used to specify the link slug for the post    |
| authorLink    | No        | String  | Used as a link for the author name in the post summaries |
| tags          | No        | Array   | Tags for the post, ["tag1", "tag2", "tag3"]              |
| keywords      | No        | Array   | Keywords used for SEO, ["key1", "key2", "key3"]          |
| draft         | No        | Boolean | Defaults to false, set to true if a post is a draft      |

### Core Theme Options

| Option             | Values        | Description                                                                             |
| ------------------ | ------------- | --------------------------------------------------------------------------------------- |
| `contentPath`      | String        | Defaults to "content/pages", determines where the pages are created from.               |
| `assetPath`        | String        | Defaults to "content/assets", determines where the page assets like images are located. |
| `displaySiteLogo`  | true or false | Defaults to true, controls whether the logo is displayed                                |
| `displaySiteTitle` | true or false | Defaults to true, controls whether the site title is displayed                          |
| `invertLogo`       | true or false | Defaults to false, controls whether the logo is inverted when the mobile menu is open   |
| `useStickyHeader`  | true or false | Defaults to false, controls whether the header is sticky or static                      |
| `useSocialLinks`   | true or false | Defaults to true, controls whether the social links are displayed or not                |
| `useColorMode`     | true or false | Defaults to true, controls whether the dark mode toggle is available.                   |
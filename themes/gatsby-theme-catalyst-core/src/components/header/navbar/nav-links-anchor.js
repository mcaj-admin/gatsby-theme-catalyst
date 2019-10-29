/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavMenuBar from "./nav-links-menubar"
import NavMenuLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"

const NavLinksAnchor = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          anchorLinks {
            name
            link
          }
        }
      }
    }
  `)

  if (typeof window !== "undefined") {
    var is_root = window.location.pathname === "/" //Equals true if we're at the root
  }

  if (is_root) {
    return (
      <NavMenuBar>
        {data.site.siteMetadata.anchorLinks.map(link => (
          <NavMenuAnchorLink to={link.link} key={link.name} text={link.name} />
        ))}
      </NavMenuBar>
    )
  } else {
    return (
      <NavMenuBar>
        {data.site.siteMetadata.anchorLinks.map(link => (
          <NavMenuLink to={"/" + link.link} key={link.name} text={link.name} />
        ))}
      </NavMenuBar>
    )
  }
}

export default NavLinksAnchor
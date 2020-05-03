/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostMeta = ({ children }) => {
  return (
    <Styled.p
      sx={{
        color: "darkgrey",
        fontSize: 1,
        textTransform: "uppercase",
        letterSpacing: "wider",
        m: 0,
        a: {
          color: "darkgrey",
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        },
        variant: "variants.postMeta",
      }}
    >
      {children}
    </Styled.p>
  )
}

export default PostMeta

import {useStaticQuery, graphql} from "gatsby";

const useNavLinks = () => {
   const {navLinks} = useStaticQuery(
        graphql`
        query navLinks {
          navLinks: allDatoCmsNavLink {
            nodes {
              url
              title
              openInNewTab
              originalId
              treeChildren {
                title
                url
                openInNewTab
                originalId
              }
            }
          }
        }`
   )

    return navLinks.nodes
}

export default useNavLinks

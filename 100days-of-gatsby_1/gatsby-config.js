module.exports = {
    plugins: [
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-transformer-yaml`,
            options: {
                // Conditionally set the typeName so that we both use a lowercased and capitalized type name
                typeName: ({ node }) => {
                    const name = node.sourceInstanceName
                    if (name === `cities`) {
                        return `City`
                    }
                    if (name === `parks`) {
                        return `park`
                    }
                    return name
                },
            },
        },
    ]
}

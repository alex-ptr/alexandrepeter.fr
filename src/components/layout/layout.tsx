import React from 'react'
import theme from "./theme"
import { ChakraProvider } from "@chakra-ui/react"

const Layout = ({ children }) => (
    <ChakraProvider
        theme={theme}
    >
        {children}
    </ChakraProvider>
)

export default Layout
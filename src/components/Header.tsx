import { Box, Flex, Text } from '@chakra-ui/react'
import * as React from 'react'

export function Header (props: {
  title: string
}) {
  return (
    <>
      <Flex as="nav" p={4} shadow='sm'>
        <Text fontWeight="bold">{props.title}</Text>
      </Flex>
    </>
  )
}

import React from 'react'
import styled from 'styled-components'
import {vsDark as theme} from '@code-surfer/themes'

const Styled = styled.div`
  text-align: left;
  font-size: 32px;
  & > div {
  }
`

const Link = styled.a.attrs(_ => ({ target: '_blank' }))`
  color: ${theme.colors.primary};
  text-decoration: none;

  &:hover,
  &:visited,
  &:focus {
    color: ${theme.colors.primary};
    text-decoration: none;
  }
`

const StyledEntry = styled.div`
  margin-bottom: 15px;
  vertical-align: middle;
`

const Entry = ({ link, title }) => (
  <StyledEntry>
    <div>
      <Link href={link}>{title}</Link>
    </div>
  </StyledEntry>
)

const Referenes = () => (
  <Styled>

    <Entry
      link="https://graphql.org/learn/"
      title="GraphQL docs"
    />

    <Entry
      link="https://www.apollographql.com/docs/react/"
      title="Apollo docs"
    />

    <Entry
      link="https://graphql-code-generator.com/docs/getting-started/"
      title="Code generator docs"
    />

    <Entry
      link="https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55"
      title="Graphql best practices from PayPal"
    />

    <Entry
      link="https://github.com/mercavus/Retailer-app/tree/apollo-state"
      title="Branch with examples code"
    />

  </Styled>
)

export default Referenes

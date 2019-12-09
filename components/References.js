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

  </Styled>
)

export default Referenes

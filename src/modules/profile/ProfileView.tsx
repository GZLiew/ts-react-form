import * as React from 'react'
import { RouteComponentProps } from 'react-router'

interface IProfileRouteParams {
  name: string
}

export const ProfileView: React.FC<RouteComponentProps<IProfileRouteParams, any, any>> = props => {
  console.log(props)
  const { params } = props.match

  return (
    <div>
      profile of {params.name}
    </div>
  )
}

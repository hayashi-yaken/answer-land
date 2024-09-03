import { FC } from 'react'

type SampleProps = {
  title: string
}

export const Sample: FC<SampleProps> = ({ title }) => {
  return <>{title}</>
}

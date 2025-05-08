import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>
            <h1>Блог</h1>
            <p>Статьи и новости о якутских ножах.</p>
          </div>
        )
    }
}

export default Home


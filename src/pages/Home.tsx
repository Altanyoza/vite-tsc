import * as React from 'react';
import { Helmet } from 'react-helmet';

interface Props {}
interface State {}

class Home extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactNode {
        return (
            <>
                <Helmet>
                    <title>Главная | Якутские ножи</title>
                    <meta name="description" content="Магазин якутских ножей" />
                </Helmet>
                <div>
                    <h1>Блог</h1>
                    <p>Статьи и новости о ножах.</p>
                </div>
            </>
        );
    }
}

export default Home;


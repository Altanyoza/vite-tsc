import * as React from 'react';
import { Helmet } from 'react-helmet';

interface AboutProps {}
interface AboutState {}

class About extends React.PureComponent<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <div className="about-page">
        <Helmet>
          <title>О нашей мастерской | Якутские ножи</title>
          <meta 
            name="description" 
            content="История создания мастерской якутских ножей с 1995 года. Традиционные технологии изготовления." 
          />
          <meta 
            name="keywords" 
            content="история якутских ножей, мастерская ножей, изготовление ножей ручной работы" 
          />
        </Helmet>

        <main className="about-content">
          <h1>О нашей мастерской</h1>
          <section className="history-section">
            <p>Основана в 1995 году в Якутске</p>
            <p>Специализируемся на традиционных якутских ножах</p>
          </section>
        </main>
      </div>
    );
  }
}

export default About;

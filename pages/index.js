import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import { Container, Row } from 'react-bootstrap'
import Changelog from '../components/changelog'

function Home({ changelogs }) {

  var changelogItems = changelogs.map((item) => <Changelog changelog={ item }  />)

  return (
    <div>
      <Head>
        <title>Changelog | WoidBook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container fluid="md">
        <Row className="justify-content-xs-center">
          {/* BOX */}
          <div className={styles.container}>
            {/* HEADING */}
            <h2 className={styles.heading}>Changelogs</h2>
            <div className={styles.divider} />
            <p className={styles.subheading}>Bleib immer auf dem neusten Stand der Entwicklung von WoidBook</p>
            {/* END HEADING */}

            <div className={styles.changelogs}>  
              {changelogItems}
            </div>
          </div>
          {/* END BOX */}
        </Row>
      </Container>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://api.woidbook.com/v1/changelog/get')

  if(res.status != 200) return {props: {changelogs: []}};

  const body = await res.json();

  return {
    props: {
      changelogs: body.changelogs
    },
    revalidate: 1
  }
}

export default Home

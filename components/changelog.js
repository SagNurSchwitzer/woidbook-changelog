import styles from './changelog.module.css'
import { Badge } from 'react-bootstrap'

export default function Changelog(props) {

    const iosItems = props.changelog.ios.map((text) =>
        <li key={Math.random()}>{text.type == "ADDED" ? <Badge variant="success">ADDED</Badge> : <Badge variant="danger">REMOVED</Badge>} {text.content}</li>
    );

    const androidItems = props.changelog.android.map((text) =>
        <li key={Math.random()}>{text.type == "ADDED" ? <Badge variant="success">ADDED</Badge> : <Badge variant="danger">REMOVED</Badge>} {text.content}</li>
    );

    return (
        <div className={styles.changelog}>
            <h3 className={styles.version}>Version {props.changelog.version}</h3>
            <p className={styles.date}>{props.changelog.date}</p>
            <div className={styles.divider} />

            <h4>iOS</h4>
            <ul>{iosItems}</ul>

            <h4>Android</h4>
            <ul>{androidItems}</ul>
            <div className={styles.divider} />
        </div>
    )
}
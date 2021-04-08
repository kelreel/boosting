import React, {ReactNode} from 'react';
import styles from './Badge.module.scss';

interface Props {
    type: 'gray' | 'blue' | 'green' | 'orange' | 'red';
    children: ReactNode;
}

const Badge = ({type, children}: Props) => {
    let color = '';
    switch (type) {
        case 'gray':
            color = '#777';
            break;
        case 'blue':
            color = '#337ab7';
            break;
        case 'green':
            color = '#418141';
            break;
        case 'orange':
            color = '#b08525';
            break;
        case 'red':
            color = '#ba4845';
            break;
        default:
            color = '#777';
    }

    return (
        <div className={styles.root} style={{backgroundColor: color}}>
            {children}
        </div>
    );
};

export default Badge;

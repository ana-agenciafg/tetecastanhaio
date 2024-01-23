import React from 'react'; 
import { useProduct } from 'vtex.product-context';
import styles from './style.css'; 
import FlagNCImg from '../../../assets/imgs/icones/selo-newcollection.png';
const SeloNewCollection = () => {
    const product = useProduct();
    const clusterHighlights = product?.product?.productClusters
    if (Array.isArray(clusterHighlights) && clusterHighlights.some(item => item.id == '144')) {
        return (
            <div className={styles.flagNC}>
                <img src={FlagNCImg}/>
            </div>
        );
    } else {
        return null;
    }
}
export default SeloNewCollection;


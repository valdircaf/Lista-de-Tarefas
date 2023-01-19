import {MdDelete} from 'react-icons/md';
import styles from './List.module.css';

export default function List ({value, onDelete}){


  return (
    <ul className={styles.list}>
        {value.map((obj, index)=>(
          <li key={index}> {obj.text} <span onClick={()=>{onDelete(index)}}><MdDelete/></span></li>
          ))}

    </ul>
  )
}

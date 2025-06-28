'use client';
import styles from '@/app/components/home/Desk.module.scss'
import {Item} from '@/app/components/shared/Item'
import data from '@/app/store/mock'

const Desk = () => {
 
  return (
    <div className={styles.home}>
      {data.map((item) => 
      <Item text={item.text} width={437} height={437} key={item.id}/>
      )}
    </div>
  )
}

export default Desk

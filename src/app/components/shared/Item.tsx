import styles from '@/app/styles/shared.module.scss'

interface ItemProps {
  width?: string | number;
  height?: string | number;
  text?: string;
  content?: any;
}

export function Item({ width, height, text, content }: ItemProps) {
  return (
    <div className={styles.item} style={{ width: width,  height: height }}>
      {content && content}
     {text && text}
    </div>
  );
}
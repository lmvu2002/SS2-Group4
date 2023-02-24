import styles from '@/pages/blog/tinymce.module.css';
import { CustomEditor } from "@/components/editor/CustomEditor"

export default function Blog() {
    return <div className={styles.container}>
    <div className={styles.editor}><CustomEditor/></div>
    <div className={styles.preview}><p>Preview Here</p></div>
    </div>
}
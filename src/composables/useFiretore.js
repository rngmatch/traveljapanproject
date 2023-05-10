/*
import { ref, onSnapshot } from 'firebase/firestore'
import db from '@/firebase'

const useFirestore = (collectionName) => {
  const documents = ref([])

  const getDocuments = async () => {
    onSnapshot(collection(db, collectionName), (snapshot) => {
      documents.value = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
    })
  }

  return { documents, getDocuments }
}

export default useFirestore
*/

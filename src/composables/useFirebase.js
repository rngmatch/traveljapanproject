import { initializeApp } from 'firebase/app'
//import { getDatabase, ref } from 'firebase/database'
//import { getFirestore, collection, onSnapshot } from 'firebase/firestore'
//import { ref } from 'vue'

const firebaseConfig = {
  apiKey: 'AIzaSyDtwpYOw3HYY2rBUtnk3-AvI-u-xakk9RQ',
  authDomain: 'traveljapan-4d0e3.firebaseapp.com',
  projectId: 'traveljapan-4d0e3',
  storageBucket: 'traveljapan-4d0e3.appspot.com',
  messagingSenderId: '394759197882',
  appId: '1:394759197882:web:827ea08c8d0a671cc29e83',
  measurementId: 'G-Q67Y76E4C2',
}
export const firebaseApp = initializeApp(firebaseConfig)
/*

const app = initializeApp(firebaseConfig)
//const db = getFirestore(app)

const dbRef = getDatabase(app).ref(
  'https://traveljapan-4d0e3-default-rtdb.firebaseio.com/'
)

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

const useRealtimeDatabase = () => {
  const data = ref(null)

  const getData = () => {
    dbRef.on('value', (snapshot) => {
      data.value = snapshot.val()
    })
  }

  return { data, getData }
}

export { db, useFirestore, useRealtimeDatabase }
*/

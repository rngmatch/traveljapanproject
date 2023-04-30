import { firebaseApp } from '@/composables/useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { ref } from 'vue'

const auth = getAuth(firebaseApp)

const isAuthenticated = ref(false)
const user = ref(null)

auth.onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    isAuthenticated.value = true
    user.value = firebaseUser
  } else {
    isAuthenticated.value = false
    user.value = null
  }
})

const login = async (username, password) => {
  try {
    await signInWithEmailAndPassword(auth, username, password)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

const logout = async () => {
  await signOut(auth)
}

export const useAuth = () => {
  return { isAuthenticated, user, login, logout }
}

import app from "./initFirebase";
import { getAuth } from 'firebase/auth'

const auth = getAuth(app);

export default auth;
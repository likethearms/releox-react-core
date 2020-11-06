import Axios from 'axios';
import { TOKEN_STORAGE_KEY, USER_ID_STORAGE_KEY } from '../../Globals';
import LoginBody from '../../hooks/login/LoginBody';

export default class ReleoxAuthenticationsEffect {
  public static login(url: string, body: LoginBody): Promise<void> {
    return Axios.post(url, body).then((r) => {
      localStorage.setItem(TOKEN_STORAGE_KEY, r.data.id);
      localStorage.setItem(USER_ID_STORAGE_KEY, r.data.userId);
      return Promise.resolve();
    });
  }
}

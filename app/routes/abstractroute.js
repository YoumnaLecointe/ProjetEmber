import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class Abstractroute extends Route {
  @service userAuth;
  redirect() {
   
  }
}

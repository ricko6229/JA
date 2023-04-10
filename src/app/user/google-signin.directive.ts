import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onclick() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      // You can handle the result of the sign-in here.
      console.log(result);
    }).catch((error) => {
      // Handle errors here.
      console.error(error);
    });
  }
}

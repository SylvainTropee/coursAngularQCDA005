import {CanActivateFn, RedirectCommand, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Mod4service} from '../mod4/mod4service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(Mod4service)
  const router = inject(Router)

  if (authService.isLogged()) {
    return true;
  } else {
    // router.navigate(["/about-us"], {queryParams : {error : 1}})
    // return false

    return new RedirectCommand(router.createUrlTree(
        ['/about-us'], {
          queryParams: {
            error: 1
          }
        }
      )
    )
  }
};

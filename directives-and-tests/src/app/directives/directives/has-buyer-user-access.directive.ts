import { Directive, ElementRef, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { distinctUntilChanged } from "rxjs";
import { UserType } from "../enums/user-type.enum";

@Directive({
    selector: '[hasBuyerUserAcess]',
    standalone: true
})

export class HasBuyerUserAccessDirective implements OnInit {

    constructor(private userService: UserService,
        private elRef: ElementRef<HTMLElement>) {}

    ngOnInit(): void {
         this.userService.user$.asObservable()
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(user => {
        
        if (user == null || user.type !== UserType.Buyer) {
            this.elRef.nativeElement.remove();
        }

      });

    }
    
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { UserType } from '../enums/user-type.enum';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-offer',
  templateUrl: './shop-offer.component.html',
  styleUrls: ['./shop-offer.component.scss']
})
export class ShopOfferComponent implements OnInit, OnDestroy {

  // should be available for buyer and admin
  isButtonBuyVisible = false;
  areLoanOptionsVisible = false;

  // should be available for delivery man and admin
  isButtonViewPackageParametersVisible = false;
  isButtonViewWarehouseStockVisible = false;

  // other variables
  productDescription = '';

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private router: Router) {} 

  ngOnInit(): void {
    // this.userService.user$.asObservable()
    //   .pipe(
    //     filter(user => !!user),
    //     distinctUntilChanged()
    //   )
    //   .subscribe(user => {
    //     this.setVisibilityFlags(user!.type);
    //   });

     this.setProductDescription(); 
  }

  ngOnDestroy(): void {
    // unsubscribe
  }

  public logInAsBuyer(): void {
    this.userService.setUserType(UserType.Buyer);
    this.reloadCurrentRoute();
  }

  public logInAsDeliveryMan(): void {
    this.userService.setUserType(UserType.DeliveryMan);
    this.reloadCurrentRoute();
  }

  public logInAsAdmin(): void {
    this.userService.setUserType(UserType.Admin);
    this.reloadCurrentRoute();
  }

  private setVisibilityFlags(type: UserType): void {
    switch(type) {
      case UserType.Buyer:
        this.isButtonBuyVisible = true;
        this.areLoanOptionsVisible = true;
        this.isButtonViewPackageParametersVisible = false;
        this.isButtonViewWarehouseStockVisible = false;

        break;

      case UserType.DeliveryMan:
        this.isButtonBuyVisible = false;
        this.areLoanOptionsVisible = false;
        this.isButtonViewPackageParametersVisible = true;
        this.isButtonViewWarehouseStockVisible = true;

        break;

      case UserType.Admin:
        this.isButtonBuyVisible = true;
        this.areLoanOptionsVisible = true;
        this.isButtonViewPackageParametersVisible = true;
        this.isButtonViewWarehouseStockVisible = true;

        break;

      default:
        this.isButtonBuyVisible = false;
        this.areLoanOptionsVisible = false;
        this.isButtonViewPackageParametersVisible = false;
        this.isButtonViewWarehouseStockVisible = false;

        return;
    }   
  }

  private setProductDescription(): void {
    this.productDescription = this.productService.getProductDescription();
  }

  private reloadCurrentRoute(): void {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

}

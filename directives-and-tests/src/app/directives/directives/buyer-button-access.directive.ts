import { Directive } from "@angular/core";
import { HasBuyerUserAccessDirective } from "./has-buyer-user-access.directive";
import { HighlightedTextDirective } from "./highlighted-text.directive";

@Directive({
    selector: '[buyerButtonAccess]',
    standalone: true,
    hostDirectives: [
        HasBuyerUserAccessDirective,
        {
            directive: HighlightedTextDirective,
            inputs: ['regularColor', 'highlightColor']
        }
    ]
})

export class BuyerButtonAccessDirective {

}
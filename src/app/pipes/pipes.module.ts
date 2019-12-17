
import { NgModule } from '@angular/core';
import { CurencyPipe } from './curency/curency.pipe';


@NgModule({
    declarations: [CurencyPipe],
    imports: [],
    exports: [CurencyPipe]
})
export class PipesModule { }

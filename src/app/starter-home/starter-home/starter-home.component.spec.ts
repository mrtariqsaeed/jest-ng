import { StarterHomeComponent } from './starter-home.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';

test('somefun()', () => {
    let component = new StarterHomeComponent;
    expect(component.someFun()).toBe(5)
})
import { MyButtonComponent } from './lib/my-button/my-button.component';

/*
 * Public API Surface of ui-components
 */

// NEVER USE THIT APPROACH TO EXPORT OBJECTS !!!!
// export * from './lib/base/field'; 
// export * from './lib/base/field.config'; 

// export * from './lib/my-button/my-button.component'; 
// export * from './lib/my-input/my-input.component'; 
// export * from './lib/my-select/my-select.component';


// BETTER APPROACH HOW TO EXPORT OBJECTS 
export { Field } from './lib/base/field'; 
export { FieldConfig } from './lib/base/field.config'; 

export { MyButtonComponent } from './lib/my-button/my-button.component'; 
export { MyInputComponent } from './lib/my-input/my-input.component'; 
export { MySelectComponent } from './lib/my-select/my-select.component'; 

export * from './lib/ui-components.module';

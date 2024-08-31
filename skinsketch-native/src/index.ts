import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SkinsketchNative.web.ts
// and on native platforms to SkinsketchNative.ts
import SkinsketchNativeModule from './SkinsketchNativeModule';
import SkinsketchNativeView from './SkinsketchNativeView';
import { ChangeEventPayload, SkinsketchNativeViewProps } from './SkinsketchNative.types';

// Get the native constant value.
export const PI = SkinsketchNativeModule.PI;

export function hello(): string {
  return SkinsketchNativeModule.hello();
}

export async function setValueAsync(value: string) {
  return await SkinsketchNativeModule.setValueAsync(value);
}

const emitter = new EventEmitter(SkinsketchNativeModule ?? NativeModulesProxy.SkinsketchNative);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SkinsketchNativeView, SkinsketchNativeViewProps, ChangeEventPayload };

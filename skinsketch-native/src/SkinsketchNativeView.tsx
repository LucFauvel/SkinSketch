import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SkinsketchNativeViewProps } from './SkinsketchNative.types';

const NativeView: React.ComponentType<SkinsketchNativeViewProps> =
  requireNativeViewManager('SkinsketchNative');

export default function SkinsketchNativeView(props: SkinsketchNativeViewProps) {
  return <NativeView {...props} />;
}

import * as React from 'react';

import { SkinsketchNativeViewProps } from './SkinsketchNative.types';

export default function SkinsketchNativeView(props: SkinsketchNativeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

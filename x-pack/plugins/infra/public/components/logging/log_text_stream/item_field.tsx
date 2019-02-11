/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import styled from 'styled-components';

import { switchProp } from '../../../utils/styles';

export const LogTextStreamItemField = styled.div.attrs<{
  scale?: 'small' | 'medium' | 'large';
}>({})`
  font-size: ${props =>
    switchProp('scale', {
      large: props.theme.eui.euiFontSizeM,
      medium: props.theme.eui.euiFontSizeS,
      small: props.theme.eui.euiFontSizeXs,
      [switchProp.default]: props.theme.eui.euiFontSize,
    })};
  line-height: ${props => props.theme.eui.euiLineHeight};
  padding: 2px ${props => props.theme.eui.euiSize} 2px 0;
`;

import type { Meta, StoryObj } from '@storybook/react';

import ExposureNeg2Outlined from '../../lib/image/ExposureNeg2Outlined';

const meta: Meta<typeof ExposureNeg2Outlined> = {
  component: ExposureNeg2Outlined,
  tags: ['autodocs'],
  title: 'image/ExposureNeg2Outlined',
};

export default meta;
type Story = StoryObj<typeof ExposureNeg2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

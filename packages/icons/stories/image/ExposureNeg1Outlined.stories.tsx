import type { Meta, StoryObj } from '@storybook/react';

import ExposureNeg1Outlined from '../../lib/image/ExposureNeg1Outlined';

const meta: Meta<typeof ExposureNeg1Outlined> = {
  component: ExposureNeg1Outlined,
  tags: ['autodocs'],
  title: 'image/ExposureNeg1Outlined',
};

export default meta;
type Story = StoryObj<typeof ExposureNeg1Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

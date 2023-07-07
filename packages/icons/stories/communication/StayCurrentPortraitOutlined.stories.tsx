import type { Meta, StoryObj } from '@storybook/react';

import StayCurrentPortraitOutlined from '../../lib/communication/StayCurrentPortraitOutlined';

const meta: Meta<typeof StayCurrentPortraitOutlined> = {
  component: StayCurrentPortraitOutlined,
  tags: ['autodocs'],
  title: 'communication/StayCurrentPortraitOutlined',
};

export default meta;
type Story = StoryObj<typeof StayCurrentPortraitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

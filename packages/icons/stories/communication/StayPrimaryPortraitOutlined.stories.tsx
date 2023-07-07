import type { Meta, StoryObj } from '@storybook/react';

import StayPrimaryPortraitOutlined from '../../lib/communication/StayPrimaryPortraitOutlined';

const meta: Meta<typeof StayPrimaryPortraitOutlined> = {
  component: StayPrimaryPortraitOutlined,
  tags: ['autodocs'],
  title: 'communication/StayPrimaryPortraitOutlined',
};

export default meta;
type Story = StoryObj<typeof StayPrimaryPortraitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

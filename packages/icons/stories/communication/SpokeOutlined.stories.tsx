import type { Meta, StoryObj } from '@storybook/react';

import SpokeOutlined from '../../lib/communication/SpokeOutlined';

const meta: Meta<typeof SpokeOutlined> = {
  component: SpokeOutlined,
  tags: ['autodocs'],
  title: 'communication/SpokeOutlined',
};

export default meta;
type Story = StoryObj<typeof SpokeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import OfflineBoltOutlined from '../../lib/action/OfflineBoltOutlined';

const meta: Meta<typeof OfflineBoltOutlined> = {
  component: OfflineBoltOutlined,
  tags: ['autodocs'],
  title: 'action/OfflineBoltOutlined',
};

export default meta;
type Story = StoryObj<typeof OfflineBoltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import UpgradeOutlined from '../../lib/action/UpgradeOutlined';

const meta: Meta<typeof UpgradeOutlined> = {
  component: UpgradeOutlined,
  tags: ['autodocs'],
  title: 'action/UpgradeOutlined',
};

export default meta;
type Story = StoryObj<typeof UpgradeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import TipsAndUpdatesOutlined from '../../lib/action/TipsAndUpdatesOutlined';

const meta: Meta<typeof TipsAndUpdatesOutlined> = {
  component: TipsAndUpdatesOutlined,
  tags: ['autodocs'],
  title: 'action/TipsAndUpdatesOutlined',
};

export default meta;
type Story = StoryObj<typeof TipsAndUpdatesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

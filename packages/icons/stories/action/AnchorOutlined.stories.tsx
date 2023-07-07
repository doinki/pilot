import type { Meta, StoryObj } from '@storybook/react';

import AnchorOutlined from '../../lib/action/AnchorOutlined';

const meta: Meta<typeof AnchorOutlined> = {
  component: AnchorOutlined,
  tags: ['autodocs'],
  title: 'action/AnchorOutlined',
};

export default meta;
type Story = StoryObj<typeof AnchorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

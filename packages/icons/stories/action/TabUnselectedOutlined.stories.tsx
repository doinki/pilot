import type { Meta, StoryObj } from '@storybook/react';

import TabUnselectedOutlined from '../../lib/action/TabUnselectedOutlined';

const meta: Meta<typeof TabUnselectedOutlined> = {
  component: TabUnselectedOutlined,
  tags: ['autodocs'],
  title: 'action/TabUnselectedOutlined',
};

export default meta;
type Story = StoryObj<typeof TabUnselectedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

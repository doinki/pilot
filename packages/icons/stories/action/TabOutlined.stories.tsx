import type { Meta, StoryObj } from '@storybook/react';

import TabOutlined from '../../lib/action/TabOutlined';

const meta: Meta<typeof TabOutlined> = {
  component: TabOutlined,
  tags: ['autodocs'],
  title: 'action/TabOutlined',
};

export default meta;
type Story = StoryObj<typeof TabOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

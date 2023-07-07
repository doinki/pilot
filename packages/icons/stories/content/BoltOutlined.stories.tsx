import type { Meta, StoryObj } from '@storybook/react';

import BoltOutlined from '../../lib/content/BoltOutlined';

const meta: Meta<typeof BoltOutlined> = {
  component: BoltOutlined,
  tags: ['autodocs'],
  title: 'content/BoltOutlined',
};

export default meta;
type Story = StoryObj<typeof BoltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

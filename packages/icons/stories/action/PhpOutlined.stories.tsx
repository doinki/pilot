import type { Meta, StoryObj } from '@storybook/react';

import PhpOutlined from '../../lib/action/PhpOutlined';

const meta: Meta<typeof PhpOutlined> = {
  component: PhpOutlined,
  tags: ['autodocs'],
  title: 'action/PhpOutlined',
};

export default meta;
type Story = StoryObj<typeof PhpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

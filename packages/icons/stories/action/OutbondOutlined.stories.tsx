import type { Meta, StoryObj } from '@storybook/react';

import OutbondOutlined from '../../lib/action/OutbondOutlined';

const meta: Meta<typeof OutbondOutlined> = {
  component: OutbondOutlined,
  tags: ['autodocs'],
  title: 'action/OutbondOutlined',
};

export default meta;
type Story = StoryObj<typeof OutbondOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

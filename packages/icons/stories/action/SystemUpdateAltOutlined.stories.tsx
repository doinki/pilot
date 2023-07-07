import type { Meta, StoryObj } from '@storybook/react';

import SystemUpdateAltOutlined from '../../lib/action/SystemUpdateAltOutlined';

const meta: Meta<typeof SystemUpdateAltOutlined> = {
  component: SystemUpdateAltOutlined,
  tags: ['autodocs'],
  title: 'action/SystemUpdateAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SystemUpdateAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

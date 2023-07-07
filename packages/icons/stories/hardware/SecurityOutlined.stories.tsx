import type { Meta, StoryObj } from '@storybook/react';

import SecurityOutlined from '../../lib/hardware/SecurityOutlined';

const meta: Meta<typeof SecurityOutlined> = {
  component: SecurityOutlined,
  tags: ['autodocs'],
  title: 'hardware/SecurityOutlined',
};

export default meta;
type Story = StoryObj<typeof SecurityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

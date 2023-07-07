import type { Meta, StoryObj } from '@storybook/react';

import DangerousOutlined from '../../lib/action/DangerousOutlined';

const meta: Meta<typeof DangerousOutlined> = {
  component: DangerousOutlined,
  tags: ['autodocs'],
  title: 'action/DangerousOutlined',
};

export default meta;
type Story = StoryObj<typeof DangerousOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

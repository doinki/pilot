import type { Meta, StoryObj } from '@storybook/react';

import PermMediaOutlined from '../../lib/action/PermMediaOutlined';

const meta: Meta<typeof PermMediaOutlined> = {
  component: PermMediaOutlined,
  tags: ['autodocs'],
  title: 'action/PermMediaOutlined',
};

export default meta;
type Story = StoryObj<typeof PermMediaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

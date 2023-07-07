import type { Meta, StoryObj } from '@storybook/react';

import PermIdentityOutlined from '../../lib/action/PermIdentityOutlined';

const meta: Meta<typeof PermIdentityOutlined> = {
  component: PermIdentityOutlined,
  tags: ['autodocs'],
  title: 'action/PermIdentityOutlined',
};

export default meta;
type Story = StoryObj<typeof PermIdentityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

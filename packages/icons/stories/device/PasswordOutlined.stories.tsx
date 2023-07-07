import type { Meta, StoryObj } from '@storybook/react';

import PasswordOutlined from '../../lib/device/PasswordOutlined';

const meta: Meta<typeof PasswordOutlined> = {
  component: PasswordOutlined,
  tags: ['autodocs'],
  title: 'device/PasswordOutlined',
};

export default meta;
type Story = StoryObj<typeof PasswordOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
